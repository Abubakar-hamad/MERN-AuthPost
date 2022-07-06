import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "./Slice/Auth/Authslice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
    },
})