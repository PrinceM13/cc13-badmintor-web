import { MY_CART } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";
import CartList from "../../features/cart/CartList";
import VerticalSpace from "../../components/VerticalSpace";
import Button from '../../components/Button';

export default function CartPage() {
    return (
        <ContentLayout>
            <PageTitle>{MY_CART}</PageTitle>
            <CartList />
            <VerticalSpace />
            <Button width="w-full" rounded="rounded-full">CREATE ORDER</Button>
            <VerticalSpace />
            <Button width="w-full" theme="my-gray-1" rounded="rounded-full" >BACK</Button>
        </ContentLayout>
    );
};