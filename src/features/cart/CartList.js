import { useSelector } from 'react-redux';

import CartCard from "./CartCard";
import useDebouncePost from '../../hooks/useDebouncePost';

export default function CartList() {
    const cartItems = useSelector(state => state.user.cart);

    // post data to server (timeout 5 sec)
    useDebouncePost();

    return (
        <div>
            {cartItems.map((item, idx) => (
                <CartCard
                    key={item.productId}
                    isFirst={!Boolean(idx)}
                    name={item.name}
                    img={item.image}
                    note={item.note}
                    price={item.price}
                    netPrice={item.price - item.discount}
                    amount={item.amount}
                    productId={item.productId}
                />
            ))}
        </div>
    );
};