import { createSlice } from '@reduxjs/toolkit';

import { getAccessToken } from '../utils/local-storage'

const authSlice = createSlice({
    name: 'auth',
    initialState: { authenticatedUser: getAccessToken() ? true : null },
    reducers: {
        setUser: (state, action) => { state.authenticatedUser = action.payload }
    }
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;