import { useLocation } from 'react-router-dom'

import Button from '../../components/Button';
import CheckoutCreditCard from '../../components/CheckoutCreditCard';
import PageTitle from "../../components/PageTitile";
import VerticalSpace from '../../components/VerticalSpace';
import ContentLayout from "../../layouts/ContentLayout";
import * as checkoutApi from '../../apis/checkout-api';

export default function PaymentPage() {
    const { state: { amount } } = useLocation()
    const handleSubmitPayment = () => { console.log('need to send slip to server') }
    
    const createCreditCardCharge = async (email, detail, amount, token) => {
        const res = await checkoutApi.creditCard({ email, detail, amount, token });
        console.log('from back ---> ', res)
    }

    return (
        <>
            <CheckoutCreditCard createCreditCardCharge={createCreditCardCharge} amount={amount * 100} />
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
        </>
    );
};