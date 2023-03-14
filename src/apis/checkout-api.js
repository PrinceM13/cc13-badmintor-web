import axios from "../config/axios";

export const creditCard = input => axios.post('/checkout/credit-card', input);