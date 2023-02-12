import Button from "../../components/Button";
import ButtonGroup from "../../components/ButtonGroup";
import InfoBox from "../../features/order/InfoBox";
import PageTitle from "../../components/PageTitile";
import VerticalSpace from "../../components/VerticalSpace";
import LabelInput from "../../features/auth/LabelInput";
import OrderList from "../../features/order/OrderList";
import ContentLayout from "../../layouts/ContentLayout";

export default function ConfirmOrder() {
    const handleChoosePayment = () => { console.log('go --> choose payment') };
    const handleBack = () => { console.log('go --> back') };

    return (
        <ContentLayout>
            <PageTitle>CONFIRM ORDER</PageTitle>
            <OrderList />
            <VerticalSpace />
            <LabelInput placeholder='reward code ?' needLabel={false} >hello</LabelInput>
            <VerticalSpace />
            <ButtonGroup />
            <VerticalSpace />
            <InfoBox isSelected={true}>pick-up detail:</InfoBox>
            <VerticalSpace />
            <InfoBox>shipping detail:</InfoBox>
            <VerticalSpace />
            <div className="w-full bg-my-mint rounded-lg py-2 text-my-gray-3 text-center"> Total = ฿999.99</div>
            <VerticalSpace />
            <div onClick={handleChoosePayment}>
                <Button width="w-full" theme="my-gray-1" rounded="rounded-full">CHOOSE PAYMENT</Button>
            </div>
            <VerticalSpace />
            <div onClick={handleBack}>
                <Button width="w-full" theme="my-gray-1" rounded="rounded-full" >BACK</Button>
            </div>
        </ContentLayout>
    );
};