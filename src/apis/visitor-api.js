import axios from "../config/axios";

export const getAllPromotions = () => axios.get('/visitor/promotions');
export const getAllBrands = () => axios.get('/visitor/brands');
export const getAllCategories = () => axios.get('/visitor/categories');
export const getAllProducts = () => axios.get('/visitor/products');

export const getAllProductsByBrandId = supplierId => axios.get('/visitor/brands/' + supplierId);
export const getAllProductsByCategoryId = categoryId => axios.get('/visitor/categories/' + categoryId);