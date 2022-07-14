import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "./Slice/Auth/Authslice";
import postReducer from "./Slice/Post/PostSlice";
export const store = configureStore({
    reducer:{
        auth:authReducer,
        thePosts:postReducer,
    },
})