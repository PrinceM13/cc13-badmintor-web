import * as visitorApi from '../apis/visitor-api';

import { setCategories, setBrands } from './visitor-slice';

export const fetchCategories = () => async (dispatch) => {
    try {
        const res = await visitorApi.getAllCategories();
        dispatch(setCategories(res.data.records));
    } catch (err) {
        console.error(err);
    }
};

export const fetchBrands = () => async (dispatch) => {
    try {
        const res = await visitorApi.getAllBrands();
        dispatch(setBrands(res.data.records));
    } catch (err) {
        console.error(err);
    }
};