import jwtDecode from 'jwt-decode';

import * as authApi from '../apis/auth-api';
import * as userApi from '../apis/user-api';
import { removeAccessToken, setAccessToken } from '../utils/local-storage';

import { setUser } from './auth-slice';
import { clearVisitor } from './visitor-slice';
import { clearUser } from './user-slice';

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await authApi.login({ email, password });   // get response from server (user access token)
        setAccessToken(res.data.accessToken);                   // store accessToken in localStorage
        dispatch(setUser(jwtDecode(res.data.accessToken)));     // set authenticatedUser with user info
    } catch (err) {
        console.error(err);
    }
};

export const logout = () => dispatch => {
    removeAccessToken();
    dispatch(setUser(null));
    dispatch(clearVisitor());
    dispatch(clearUser());
};

export const fetchAuthUser = () => async (dispatch) => {
    try {
        const res = await userApi.getMyInfo();
        dispatch(setUser(res.data.user));
    } catch (err) {
        console.error(err);
        removeAccessToken();
    }
};