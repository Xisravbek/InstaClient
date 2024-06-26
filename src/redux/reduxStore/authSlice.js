import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null,
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload;
        }
    }

})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;