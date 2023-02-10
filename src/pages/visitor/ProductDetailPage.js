import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';
// import PageTitle from "../../components/PageTitile";
import VerticalSpace from '../../components/VerticalSpace';
import ProductImage from '../../features/product/ProductImage';
import ContentLayout from "../../layouts/ContentLayout";

export default function ProductDetailPage() {
    const { productId } = useParams();
    const id = productId.split('-')[1];

    // need to initial to avoid product.xxx error in first run (product = undefine)
    const [product = {}] = useSelector(state => state.visitor.products.filter(product => product.id === +id));

    const price = product.price;
    const netPrice = (product?.Promotion?.discount && price - product?.Promotion?.discount) || price;

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
                    <Button theme='my-gray-1' size='text-sm sm:text-base lg:text-xl'>ADD TO CART</Button>
                    <Button size='text-sm sm:text-base lg:text-xl' >BUY NOW</Button>
                </div>
            </div>
        </ContentLayout>
    );
};