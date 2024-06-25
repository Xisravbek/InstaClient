import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
}

const loaderSlice = createSlice({
    name: "loaderSlice",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        successLoading: (state) => {
            state.isLoading = false;
        },
        failureLoading: (state) => {
            state.isLoading = false;
        }
    }

})

export const {startLoading , successLoading , failureLoading} = loaderSlice.actions;
export default loaderSlice.reducer;