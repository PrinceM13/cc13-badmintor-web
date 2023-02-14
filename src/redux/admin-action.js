import * as adminApi from '../apis/admin-api';
import { setUsers } from './admin-slice';

export const getAllUser = () => async dispatch => {
    try {
        const res = await adminApi.getAllUser();
        dispatch(setUsers(res.data.records));
    } catch (err) {
        console.error(err);
    }
};