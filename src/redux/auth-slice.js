import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import { getAccessToken } from '../utils/local-storage'

const authSlice = createSlice({
    name: 'auth',
    // initialState: { authenticatedUser: getAccessToken() ? true : null },
    initialState: { authenticatedUser: getAccessToken() ? jwtDecode(getAccessToken()) : null },
    reducers: {
        setUser: (state, action) => { state.authenticatedUser = action.payload }
    }
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;