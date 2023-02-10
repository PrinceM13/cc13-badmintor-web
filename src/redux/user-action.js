import * as userApi from '../apis/user-api';
import { setCart } from './user-slice';

export const getMyCart = () => async dispatch => {
    try {
        const res = await userApi.getMyCart();
        dispatch(setCart(res.data.carts));
    } catch (err) {
        console.error(err);
    }
}