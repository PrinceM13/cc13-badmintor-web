import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import { getAccessToken } from '../utils/local-storage'

const authSlice = createSlice({
    name: 'auth',
    initialState: { authenticatedUser: getAccessToken() ? true : null },
    reducers: {
        login: (state, action) => { state.authenticatedUser = jwtDecode(action.payload) },
        logout: (state) => { state.authenticatedUser = null }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;