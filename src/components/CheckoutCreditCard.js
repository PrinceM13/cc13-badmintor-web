import Script from 'react-load-script';
import { useSelector } from 'react-redux';
import Button from './Button';

export default function CheckoutCreditCard ({ createCreditCardCharge, amount }){
    const order = useSelector(state => state.user.order);

    let OmiseCard;
    const handleLoadScript = () => {
        OmiseCard = window.OmiseCard;
        OmiseCard.configure({
            publicKey: 'pkey_test_5v35513b8xzoujo9hx5',
            currency: 'THB',
            frameLabel: 'BADMINTER',
            submitLabel: 'PAY NOW',
            buttonLabel: 'PAY WITH OMISE'
        });
    }

    const creditCardConfigure = () => {
        OmiseCard.configure({
            defaultPaymentMethod: "credit_card",
            otherPaymentMethods: []
        });
        OmiseCard.configureButton('#checkout-button');
        OmiseCard.attach();
    }

    const omiseCardHandler = () => {
        OmiseCard.open({
            amount,
            onCreateTokenSuccess: (token) => {
                createCreditCardCharge( 'pp@gmail.com', order.userNote, amount, token )
            },
            onFormClosed: () => {},
        })
    }

    const handleClick = e => {
        e.preventDefault();
        creditCardConfigure();
        omiseCardHandler();
    }

    return (
        <div>
            Credit Card
            <Script
                url="https://cdn.omise.co/omise.js"
                onLoad={handleLoadScript}
            />
            <form>
                <Button id='checkout-button' onClick={handleClick} type='button'>Pay with Credit Card</Button>
            </form>
        </div>
    );
}