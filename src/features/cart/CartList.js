import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import CartCard from "./CartCard";
import * as userApi from '../../apis/user-api'

export default function CartList() {
    const cartItems = useSelector(state => state.user.cart);

    useEffect(() => {
        const debouncePostToDatabase = async () => {
            try {
                const res = await userApi.addMyCart(cartItems);
                console.log(res.data.message);
            } catch (err) {
                console.error(err);
            }
        };
        const handleTimeout = setTimeout(() => {
            debouncePostToDatabase();
        }, 5000);

        return () => clearTimeout(handleTimeout);
    }, [cartItems]);

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