import axios from "../config/axios";

export const getMyInfo = () => axios.get('/user/profile');
export const getMyCart = () => axios.get('/user/cart');