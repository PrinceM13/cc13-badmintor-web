import { createSlice } from '@reduxjs/toolkit';

const visitorSlice = createSlice({
    name: 'visitor',
    initialState: { categories: [], brands: [] },
    reducers: {
        setCategories: (state, action) => { state.categories = action.payload },
        setBrands: (state, action) => { state.brands = action.payload }
    }
});

export const { setCategories, setBrands } = visitorSlice.actions;

export default visitorSlice.reducer;