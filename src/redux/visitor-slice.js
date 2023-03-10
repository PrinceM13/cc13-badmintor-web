import { createSlice } from '@reduxjs/toolkit';

const initialVisitor = {
    brands: [],
    categories: [],
    // product
    products: [],
    brandProducts: [],
    categoryProducts: [],
    promotionProducts: [],
    // path
    previousPath: ''
}

const visitorSlice = createSlice({
    name: 'visitor',
    initialState: initialVisitor,
    reducers: {
        setBrands: (state, action) => { state.brands = action.payload },
        setCategories: (state, action) => { state.categories = action.payload },
        // product
        setProducts: (state, action) => { state.products = action.payload },
        setBrandProducts: (state, action) => { state.brandProducts = action.payload },
        setCategoryProducts: (state, action) => { state.categoryProducts = action.payload },
        setPromotionProducts: (state, action) => { state.promotionProducts = action.payload },
        // path
        setPreviousPath: (state, action) => { state.previousPath = action.payload },
        // clear
        clearVisitor: state => {
            state.brands = [];
            state.categories = [];
            // product
            state.products = [];
            state.brandProducts = [];
            state.categoryProducts = [];
            state.promotionProducts = [];
            state.previousPath = '';
        }
    }
});

export const { setBrands, setCategories, setProducts, setBrandProducts, setCategoryProducts, setPromotionProducts, clearVisitor, setPreviousPath } = visitorSlice.actions;

export default visitorSlice.reducer;