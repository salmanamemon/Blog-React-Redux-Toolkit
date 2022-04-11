import { configureStore } from '@reduxjs/toolkit';

import loginReducer from "./features/login/loginSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({ 
    reducer: {
        login: loginReducer,
        user: userReducer,
    } 
});

export default store;