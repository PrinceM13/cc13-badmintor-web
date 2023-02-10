import { createSlice } from '@reduxjs/toolkit';

const visitorSlice = createSlice({
    name: 'visitor',
    initialState: { categories: [], brands: [], products: [] },
    reducers: {
        setCategories: (state, action) => { state.categories = action.payload },
        setBrands: (state, action) => { state.brands = action.payload },
        setProducts: (state, action) => { state.products = action.payload }
    }
});

export const { setCategories, setBrands, setProducts } = visitorSlice.actions;

export default visitorSlice.reducer;