import axios from "../config/axios";

export const getAllUser = () => axios.get('/admin/users');
export const getAllOrder = () => axios.get('/admin/orders');