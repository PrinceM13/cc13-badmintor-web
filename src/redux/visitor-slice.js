import { createSlice } from '@reduxjs/toolkit';

const visitorSlice = createSlice({
    name: 'visitor',
    initialState: {
        brands: [],
        categories: [],
        // product
        products: [],
        brandProducts: [],
        categoryProducts: [],
        promotionProducts: []
    },
    reducers: {
        setBrands: (state, action) => { state.brands = action.payload },
        setCategories: (state, action) => { state.categories = action.payload },
        // product
        setProducts: (state, action) => { state.products = action.payload },
        setBrandProducts: (state, action) => { state.brandProducts = action.payload },
        setCategoryProducts: (state, action) => { state.categoryProducts = action.payload },
        setPromotionProducts: (state, action) => { state.promotionProducts = action.payload }
    }
});

export const { setBrands, setCategories, setProducts, setBrandProducts, setCategoryProducts, setPromotionProducts } = visitorSlice.actions;

export default visitorSlice.reducer;