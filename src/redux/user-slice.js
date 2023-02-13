import { createSlice } from '@reduxjs/toolkit';

const initialCart = []

const cartSlice = createSlice({
    name: 'user',
    initialState: { profile: {}, cart: initialCart, order: {}, orderItems: initialCart, isPickup: true },    // cart[x] = { productId: 3, amount: 2, price: 300, discount: 50, note: '' }
    reducers: {
        setProfile: (state, action) => { state.profile = action.payload },
        // cart
        setCart: (state, action) => {
            const myCart = action.payload.map(el => ({
                productId: el.productId,
                name: el.Product.name,
                image: el.Product.image !== 'dummy' || null,
                amount: el.amount,
                price: +el.Product.price,
                discount: el.Product?.Promotion?.isActive ? +el.Product?.Promotion?.discount : 0,
                note: el.Product.note,
                selected: false,
            }));
            state.cart = myCart;
        },
        updateCart: (state, action) => { state.cart = state.cart.filter(el => !action.payload.includes(el.productId)) },
        setCartItemSelected: (state, action) => { state.cart.map(el => { if (el.productId === action.payload.id) { el.selected = action.payload.selected } }) },
        addToCart: (state, action) => { state.cart.push(action.payload) },
        increaseAmount: (state, action) => { state.cart.map(el => { if (el.productId === action.payload) { el.amount++ } }) },
        decreaseAmount: (state, action) => { state.cart.map(el => { if (el.productId === action.payload && el.amount > 0) { el.amount-- } }) },
        // updateNote: (state, action) => { state.cart.map(el => { if (el.productId === action.payload.productId) { el.note = action.payload.note } }) },
        // order
        createOrderItems: (state, action) => { state.orderItems = action.payload },  // copy selected items from cart to orderItems (will delete from cart just when confirm order)
        setOrder: (state, action) => { state.order = action.payload },
        setOrderIdToOrderItems: (state, action) => { state.orderItems.map(el => el = { ...el, orderId: action.payload }) },
        // pickup
        setIsPickup: (state, action) => { state.isPickup = action.payload },
        // clear
        clearCartItemSelected: state => { state.cart.map(el => { el.selected = false }) },
        clearOrderItems: state => { state.orderItems = initialCart },
        clearUser: state => {
            state.cart = initialCart;
            state.profile = {};
        }
    }
});

export const { setProfile, setCart, setCartItemSelected, addToCart, increaseAmount, decreaseAmount /*, updateNote*/, createOrderItems, setIsPickup,
    updateCart, setOrder, setOrderIdToOrderItems, clearCartItemSelected, clearOrderItems, clearUser } = cartSlice.actions;

export default cartSlice.reducer;

// const cartItemDummy = {
//     productId: 0,
//     name: '',
//     image: '',
//     amount: 0,
//     price: 0,
//     discount: 0,
//     note: ''
// }

// const initialCart = [cartItemDummy1, cartItemDummy2, cartItemDummy3]

// // need to send userId too
// const cartItemDummy1 = {
//     productId: 333,
//     name: 'VICTOR-YX200',
//     image: null,
//     amount: 12,
//     price: 300,
//     discount: 50,
//     note: 'hello world, need green one'
// }
// const cartItemDummy2 = {
//     productId: 555,
//     name: 'LINING-R300',
//     image: null,
//     amount: 3,
//     price: 1000,
//     discount: 0,
//     note: ''
// }
// const cartItemDummy3 = {
//     productId: 999,
//     name: 'YONEX-L352',
//     image: null,
//     amount: 2,
//     price: 500,
//     discount: 50,
//     note: 'please set at 32lbs'
// }