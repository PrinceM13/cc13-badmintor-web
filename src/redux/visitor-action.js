import * as visitorApi from '../apis/visitor-api';

import { setCategories, setBrands, setProducts } from './visitor-slice';

export const fetchAllCategories = () => async (dispatch) => {
    try {
        const res = await visitorApi.getAllCategories();
        dispatch(setCategories(res.data.records));
    } catch (err) {
        console.error(err);
    }
};

export const fetchAllBrands = () => async (dispatch) => {
    try {
        const res = await visitorApi.getAllBrands();
        dispatch(setBrands(res.data.records));
    } catch (err) {
        console.error(err);
    }
};

export const fetchAllProducts = () => async (dispatch) => {
    try {
        const res = await visitorApi.getAllProducts();
        dispatch(setProducts(res.data.products));
    } catch (err) {
        console.error(err);
    }
};