import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: { users: [], orders: [] },
    reducers: {
        setUsers: (state, action) => { state.users = action.payload },
        setOrders: (state, action) => { state.orders = action.payload }
    }
});

export const { setUsers, setOrders } = adminSlice.actions;

export default adminSlice.reducer;