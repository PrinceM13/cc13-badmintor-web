import Button from '../../components/Button';

import PageTitle from "../../components/PageTitile";
import VerticalSpace from '../../components/VerticalSpace';
import ContentLayout from "../../layouts/ContentLayout";

export default function PaymentPage() {
    const handleSubmitPayment = () => { console.log('need to send slip to server') }

    return (
        <ContentLayout>
            <PageTitle>PAYMENT</PageTitle>
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <img src='https://picsum.photos/400' className='rounded-lg' />
                </div>
                <VerticalSpace />
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <div>bank: SBC</div>
                        <div>name: code camp13</div>
                        <div>number: 120-3920-293-9183</div>
                    </div>
                </div>
            </div>
            <VerticalSpace />
            <input
                type='file'
                className="bg-my-gray-3 border border-my-gray-1 placeholder-my-gray-1 sm:text-sm rounded-lg focus:ring-my-mint focus:border-my-mint block w-full"
            />
            <VerticalSpace />
            <div onClick={handleSubmitPayment}>
                <Button width='w-full' rounded='rounded-full'>SUBMIT PAYMENT</Button>
            </div>
        </ContentLayout>
    );
};