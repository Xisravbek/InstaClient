import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reduxStore/authSlice";
import loaderSlice from "./reduxStore/loaderSlice";

export const store = configureStore({
    reducer: {
        authSlice,
        loaderSlice
    }
})