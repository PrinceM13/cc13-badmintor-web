import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: { users: [] },
    reducers: {
        setUsers: (state, action) => { state.users = action.payload },
    }
});

export const { setUsers } = adminSlice.actions;

export default adminSlice.reducer;