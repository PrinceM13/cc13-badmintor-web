import * as visitorApi from '../apis/visitor-api';

import { setBrands, setCategories, setProducts, setBrandProducts, setCategoryProducts, setPromotionProducts } from './visitor-slice';

export const fetchAllCategories = () => async dispatch => {
    try {
        const res = await visitorApi.getAllCategories();
        dispatch(setCategories(res.data.records));
    } catch (err) {
        console.error(err);
    }
};

export const fetchAllBrands = () => async dispatch => {
    try {
        const res = await visitorApi.getAllBrands();
        dispatch(setBrands(res.data.records));
    } catch (err) {
        console.error(err);
    }
};

// fetch products here
// don't use in normal case (fetch to many data)
export const fetchAllProducts = () => async dispatch => {
    try {
        const res = await visitorApi.getAllProducts();
        dispatch(setProducts(res.data.products));
    } catch (err) {
        console.error(err);
    }
};
// get with cart items array
export const fetchAllProductsInCart = cart => async dispatch => {
    try {
        const res = await visitorApi.getAllProductsInCart(cart);
        dispatch(setProducts(res.data.products));
    } catch (err) {
        console.error(err);
    }
};

export const fetchAllProductsByCategoryId = filterId => async dispatch => {
    try {
        const res = await visitorApi.getAllProductsByCategoryId(filterId);
        dispatch(setCategoryProducts(res.data.products));
    } catch (err) {
        console.error(err);
    }
};

export const fetchAllProductsByBrandId = filterId => async dispatch => {
    try {
        const res = await visitorApi.getAllProductsByBrandId(filterId);
        dispatch(setBrandProducts(res.data.products));
    } catch (err) {
        console.error(err);
    }
};

export const fetchAllProductsWithPromotion = () => async dispatch => {
    try {
        const res = await visitorApi.getAllPromotions();
        dispatch(setPromotionProducts(res.data.products));
    } catch (err) {
        console.error(err);
    }
};