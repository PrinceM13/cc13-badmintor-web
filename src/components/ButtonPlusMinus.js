import { useDispatch, useSelector } from 'react-redux';

import { deleteFromMyCart } from '../redux/user-action'
import { increaseAmount, decreaseAmount } from '../redux/user-slice';
import Button from "./Button";

export default function ButtonPlusMinus({ amount, productId }) {
    const dispatch = useDispatch();

    // max stock
    const cartProducts = useSelector(state => state.visitor.products)
    const objCartProduct = cartProducts.reduce((acc, el) => {
        acc = { ...acc, [el.id]: el.quantity }
        return acc;
    }, {});

    return (
        <div className="flex flex-col gap-1 items-center">
            <div onClick={() => {
                if (amount < objCartProduct[productId]) { dispatch(increaseAmount(productId)) }
                else { alert('out of stock !') }
            }}>
                <Button theme="my-gray-1" size="text-2xl md:text-3xl" p="px-2" width="" border="" >+</Button>
            </div>
            <div className="text-center text-lg md:text-2xl" >{amount}</div>
            <div onClick={() => {
                if (amount === 1) { dispatch(deleteFromMyCart(productId)) }
                dispatch(decreaseAmount(productId))
            }}
            >
                <Button theme="my-gray-1" size="text-2xl md:text-3xl" p="px-2" width="" border="" >-</Button>
            </div>
        </div>
    );
};