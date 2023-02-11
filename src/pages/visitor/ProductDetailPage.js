import { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAllProductsByCategoryId, fetchAllProductsByBrandId, fetchAllProductsWithPromotion } from '../../redux/visitor-action';
import { setPreviousPath } from '../../redux/visitor-slice';
import { addToCart, increaseAmount } from '../../redux/user-slice';

import useDebouncePost from '../../hooks/useDebouncePost';

import Button from '../../components/Button';
// import PageTitle from "../../components/PageTitile";
import VerticalSpace from '../../components/VerticalSpace';
import ProductImage from '../../features/product/ProductImage';
import ContentLayout from "../../layouts/ContentLayout";
import { BRANDS, CATEGORIES, PROMOTIONS } from '../../config/constant';

export default function ProductDetailPage() {
    const { productId, filterId } = useParams();
    const id = +productId.split('-')[1];

    const location = useLocation();
    const currentFilter = location.pathname.split('/')[1];
    let productDataFrom;
    if (currentFilter === CATEGORIES.toLocaleLowerCase()) { productDataFrom = 'categoryProducts' }
    else if (currentFilter === BRANDS.toLocaleLowerCase()) { productDataFrom = 'brandProducts' }
    else if (currentFilter === PROMOTIONS.toLocaleLowerCase()) { productDataFrom = 'promotionProducts' }

    // for refresh
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentFilter === CATEGORIES.toLocaleLowerCase()) { dispatch(fetchAllProductsByCategoryId(filterId)) }
        else if (currentFilter === BRANDS.toLocaleLowerCase()) { dispatch(fetchAllProductsByBrandId(filterId)) }
        else if (currentFilter === PROMOTIONS.toLocaleLowerCase()) { dispatch(fetchAllProductsWithPromotion()) }
    }, []);

    // need to initial to avoid product.xxx error in first run (product = undefine)
    const [product = {}] = useSelector(state => state.visitor[productDataFrom].filter(product => product.id === id));
    const cartItems = useSelector(state => state.user.cart);
    const isExistInCart = cartItems.filter(item => item.productId === id);

    // post data to server (timeout 5 sec)
    useDebouncePost();

    const price = product.price;
    const netPrice = (product?.Promotion?.discount && price - product?.Promotion?.discount) || price;

    // need to check if product already exist in cart or not
    const toCartItem = {
        productId: id,
        name: product.name,
        image: null,
        amount: 1,
        price: +price,
        discount: price - netPrice,
        note: product.note
    }

    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const navigate = useNavigate();
    const handleAddToCart = () => {
        if (!authenticatedUser) {
            dispatch(setPreviousPath(location.pathname));
            navigate('/login');
        }
        console.log(isExistInCart)
        if (!isExistInCart.length) { dispatch(addToCart(toCartItem)) }
        else { dispatch(increaseAmount(id)); console.log('already exist !!!') }
    }
    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/user/cart');
    }

    return (
        <ContentLayout>
            {/* <PageTitle>Product Detail {productId}</PageTitle> */}
            <div>
                <VerticalSpace />
            </div>
            <div className='hidden sm:block'>
                <VerticalSpace /><VerticalSpace />
            </div>
            <div className='flex flex-col p-4 gap-8'>
                <div className='flex flex-col sm:flex-row items-center gap-4'>
                    <div className='flex-shrink-0 w-[80%] max-w-[250px] sm:w-[250px] lg:max-w-[350px] lg:w-[350px]'>
                        <ProductImage />
                    </div>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='text-lg sm:text-2xl'>{product.name}</div>
                        <div className='text-sm sm:text-lg'>{product.note}</div>
                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                {price !== netPrice && <div className='text-lg sm:text-2xl line-through text-my-gray-2'>{price}</div>}
                                <div className='text-lg sm:text-2xl text-my-mint'>{netPrice}</div>
                            </div>
                            <div className='text-base sm:text-xl text-my-gray-1 pr-4'>{product.quantity} Available</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-end gap-2 px-4'>
                    <div onClick={handleAddToCart}>
                        <Button theme='my-gray-1' size='text-sm sm:text-base lg:text-xl'>ADD TO CART</Button>
                    </div>
                    <div onClick={handleBuyNow}>
                        <Button size='text-sm sm:text-base lg:text-xl' >BUY NOW</Button>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
};