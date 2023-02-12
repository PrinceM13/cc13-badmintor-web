import * as userApi from '../apis/user-api';
import { setCart, setProfile } from './user-slice';

export const getMyCart = () => async dispatch => {
    try {
        const res = await userApi.getMyCart();
        dispatch(setCart(res.data.carts));
    } catch (err) {
        console.error(err);
    }
};

export const getMyInfo = () => async dispatch => {
    try {
        const res = await userApi.getMyInfo();
        dispatch(setProfile(res.data.user));
    } catch (err) {
        console.error(err);
    }
};