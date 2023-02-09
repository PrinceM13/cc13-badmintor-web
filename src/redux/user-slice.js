import { createSlice } from '@reduxjs/toolkit';

// need to send userId too
const cartItemDummy1 = {
    productId: 6,
    name: 'VICTOR-YX200',
    image: null,
    amount: 12,
    price: 300,
    discount: 50,
    note: 'hello world, need green one'
}
const cartItemDummy2 = {
    productId: 8,
    name: 'LINING-R300',
    image: null,
    amount: 3,
    price: 1000,
    discount: 0,
    note: ''
}
const cartItemDummy3 = {
    productId: 13,
    name: 'YONEX-L352',
    image: null,
    amount: 2,
    price: 500,
    discount: 50,
    note: 'please set at 32lbs'
}

const initialCart = [cartItemDummy1, cartItemDummy2, cartItemDummy3]

const cartSlice = createSlice({
    name: 'user',
    initialState: { cart: initialCart, profile: {} },    // cart[x] = { productId: 3, amount: 2, price: 300, discount: 50, note: '' }
    reducers: {
        addToCart: (state, action) => { state.cart.push(action.payload) },
        increaseAmount: (state, action) => { state.cart.map(el => { if (el.productId === action.payload) { el.amount++ } }) },
        decreaseAmount: (state, action) => { state.cart.map(el => { if (el.productId === action.payload && el.amount > 0) { el.amount-- } }) },
        // decreaseProductInCart: (state, action) => { },
    }
});

export const { addToCart, increaseAmount, decreaseAmount } = cartSlice.actions;

export default cartSlice.reducer;