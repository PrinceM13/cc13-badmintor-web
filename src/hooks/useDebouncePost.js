import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as userApi from '../apis/user-api';

export default function useDebouncePost(time = 5000) {
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
        }, time);

        return () => clearTimeout(handleTimeout);
    }, [cartItems]);
}