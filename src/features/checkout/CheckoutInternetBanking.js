import Script from 'react-load-script';
import { publicKey } from '../../confidential/keys';

import { useSelector } from 'react-redux';
import Button from '../../components/Button';

export default function CheckoutInternetBanking () {
    // const order = useSelector(state => state.user.order);

    // let OmiseCard;
    // const handleLoadScript = () => {
    //     OmiseCard = window.OmiseCard;
    //     OmiseCard.configure({
    //         publicKey ,
    //         currency: 'THB',
    //         frameLabel: 'BADMINTER',
    //         submitLabel: 'PAY NOW',
    //         buttonLabel: 'PAY WITH OMISE'
    //     });
    // }

    // const internetBankingConfigure = () => {
    //     OmiseCard.configure({
    //         defaultPaymentMethod: "credit_card",
    //         otherPaymentMethods: []
    //     });
    //     OmiseCard.configureButton('#internet-banking');
    //     OmiseCard.attach();
    // }

    // const omiseCardHandler = () => {
    //     OmiseCard.open({
    //         amount,
    //         onCreateTokenSuccess: (token) => {
    //             createCreditCardCharge( 'pp@gmail.com', order.userNote, amount, token )
    //         },
    //         onFormClosed: () => {},
    //     })
    // }

    // const handleClick = e => {
    //     e.preventDefault();
    //     creditCardConfigure();
    //     omiseCardHandler();
    // }

    return (
        <div>
            {/* <Script
                url="https://cdn.omise.co/omise.js"
                onLoad={handleLoadScript}
            />
            <form>
                <Button id='checkout-button' onClick={handleClick} type='button'>Pay with Credit Card</Button>
            </form> */}
        </div>
    );
}