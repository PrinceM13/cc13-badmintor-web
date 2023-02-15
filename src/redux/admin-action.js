import * as adminApi from '../apis/admin-api';
import { setUsers, setOrders } from './admin-slice';

export const getAllUser = () => async dispatch => {
    try {
        const res = await adminApi.getAllUser();
        dispatch(setUsers(res.data.records));
    } catch (err) {
        console.error(err);
    }
};

export const getAllOrder = () => async dispatch => {
    try {
        const res = await adminApi.getAllOrder();
        dispatch(setOrders(res.data.records));
    } catch (err) {
        console.error(err);
    }
};