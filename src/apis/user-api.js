import axios from "../config/axios";

export const getMyInfo = () => axios.get('/user/profile');
// cart
export const getMyCart = () => axios.get('/user/cart');
export const addMyCart = input => axios.post('/user/cart', input);