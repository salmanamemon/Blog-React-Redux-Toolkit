import { configureStore } from '@reduxjs/toolkit';

import loginReducer from "./features/login/loginSlice";
import userReducer from "./features/user/userSlice";
import postsReducer from "./features/post/postsSlice";

const store = configureStore({ 
    reducer: {
        login: loginReducer,
        user: userReducer,
        posts: postsReducer,
    } 
});

export default store;