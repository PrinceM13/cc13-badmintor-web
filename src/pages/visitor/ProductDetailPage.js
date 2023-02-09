import { useParams } from 'react-router-dom';
import Button from '../../components/Button';

import PageTitle from "../../components/PageTitile";
import ProductImage from '../../features/product/ProductImage';
import ContentLayout from "../../layouts/ContentLayout";

export default function ProductDetailPage() {
    const { productId } = useParams();
    return (
        <ContentLayout>
            <PageTitle>Product Detail {productId}</PageTitle>
            <div className='flex flex-col p-4 gap-4'>
                <div className='flex flex-col sm:flex-row items-center gap-4'>
                    <div className='flex-shrink-0 w-[80%] max-w-[250px] sm:w-[250px] lg:max-w-[350px] lg:w-[350px]'>
                        <ProductImage />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-lg sm:text-2xl'>Name</div>
                        <div className='text-sm sm:text-lg'>Product Note: Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been the 1500s, when an unknown printer took it to make a type specimen book.</div>
                        <div>Price</div>
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