import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import userReducer from './user-slice';
import visitorReducer from './visitor-slice';
import adminReducer from './admin-slice';
import superUserReducer from './super-user-slice';
import spinnerReducer from './spinner-slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        visitor: visitorReducer,
        admin: adminReducer,
        superUser: superUserReducer,
        spinner: spinnerReducer
    }
});