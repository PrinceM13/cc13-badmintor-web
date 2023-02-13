import axios from "../config/axios";

export const getMyInfo = () => axios.get('/user/profile');
// cart
export const getMyCart = () => axios.get('/user/cart');
export const addMyCart = input => axios.post('/user/cart', input);
export const deleteItemInCart = productId => axios.delete('/user/cart/' + productId);
// order
export const createOrder = input => axios.post('user/orders', input);
export const createOrderItems = input => axios.post('user/order-items', input);