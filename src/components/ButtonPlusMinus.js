import { useDispatch } from 'react-redux';

import { increaseAmount, decreaseAmount } from '../redux/user-slice';
import Button from "./Button";

export default function ButtonPlusMinus({ amount, productId }) {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-1 items-center">
            <div onClick={() => { dispatch(increaseAmount(productId)) }}>
                <Button theme="my-gray-1" size="text-2xl" p="px-2" width="" border="" >+</Button>
            </div>
            <div className="text-center text-lg" >{amount}</div>
            <div onClick={() => { dispatch(decreaseAmount(productId)) }}>
                <Button theme="my-gray-1" size="text-2xl" p="px-2" width="" border="" >-</Button>
            </div>
        </div>
    );
};