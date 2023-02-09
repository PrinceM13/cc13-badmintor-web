import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import userReducer from './user-slice';
import visitorReducer from './visitor-slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        visitor: visitorReducer
    }
});