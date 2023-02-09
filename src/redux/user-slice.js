import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'user',
    initialState: { cart: [], profile: {} },    // cart[x] = { productId: 3, amount: 2, price: 300, discount: 50, note: '' }
    reducers: {
        addToCart: (state, action) => { state.cart.push(action.payload) },
        removeFromCart: (state, action) => { },
        increaseProductInCart: (state, action) => { },
        decreaseProductInCart: (state, action) => { },
    }
});

export const { } = cartSlice.actions;

export default cartSlice.reducer;