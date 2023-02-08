import axios from "../config/axios";

export const getAllPromotion = () => axios.get('/visitor/promotions');
export const getAllBrand = () => axios.get('/visitor/brands');
export const getBrandById = supplierId => axios.get('/visitor/brands/' + supplierId);
export const getAllCategory = () => axios.get('/visitor/categories');
export const getCategoryById = categoryId => axios.get('/visitor/categories/' + categoryId);