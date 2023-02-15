import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createOrderItems } from '../../redux/user-slice';
import { MY_CART } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";
import CartList from "../../features/cart/CartList";
import VerticalSpace from "../../components/VerticalSpace";
import Button from '../../components/Button';
import { useEffect } from 'react';
import { fetchAllProductsInCart } from '../../redux/visitor-action';

export default function CartPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.user.cart);

    // max stock
    const productIds = cartItems.map(item => item.productId)
    useEffect(() => { dispatch(fetchAllProductsInCart(productIds)) }, [cartItems]);

    const handleCreateOrder = () => {
        const toOrderItems = cartItems.filter(el => el.selected === true);
        if (toOrderItems.length === 0) {
            alert('Please select atleast 1 item');
        } else {
            dispatch(createOrderItems(toOrderItems));
            navigate('/user/confirm-order');
        }
    };

    const handleBack = () => { navigate(-1) };

    useEffect(() => {
        // re-direct to home page if no item in cart
        const timeOutId = setTimeout(() => {
            navigate('/');
        }, 2000);
        if (cartItems.length !== 0) { clearTimeout(timeOutId) }
        return () => { clearTimeout(timeOutId) }
    }, [cartItems]);

    return (
        <ContentLayout>
            {cartItems.length === 0
                ?
                <div className='flex justify-center py-[25%]'>
                    <PageTitle size='text-2xl md:text-5xl'>No items in cart yet !!!</PageTitle>
                </div>
                :
                <>
                    <PageTitle>{MY_CART}</PageTitle>
                    <CartList />
                    <VerticalSpace />
                    <div onClick={handleCreateOrder}>
                        <Button width="w-full" rounded="rounded-full">CREATE ORDER</Button>
                    </div>
                    <VerticalSpace />
                    <div onClick={handleBack}>
                        <Button width="w-full" theme="my-gray-1" rounded="rounded-full" >BACK</Button>
                    </div>
                </>
            }
        </ContentLayout>
    );
};