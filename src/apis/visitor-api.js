import axios from "../config/axios";

export const getAllCategory = () => axios.get('/visitor/categories');
export const getCategoryById = categoryId => axios.get('/visitor/categories/' + categoryId);