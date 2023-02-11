import { useDispatch } from 'react-redux';

import { createOrderItems } from '../../redux/user-slice';
import { MY_CART } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";
import CartList from "../../features/cart/CartList";
import VerticalSpace from "../../components/VerticalSpace";
import Button from '../../components/Button';

export default function CartPage() {
    const dispatch = useDispatch();

    const handleCreateOrder = () => {
        console.log('create order please');
        dispatch(createOrderItems(/* selected items from cart */));
    }

    const handleBack = () => {
        console.log('back please');
    }
    return (
        <ContentLayout>
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
        </ContentLayout>
    );
};