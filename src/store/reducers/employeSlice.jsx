import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employe:null
}

const employeSlice = createSlice({
    name:'employe',
    initialState,
    reducers: {
        setEmploye: (state, action) => {
            state.employe = action.payload;
        },
    }
})

export default employeSlice.reducer;
export const {setEmploye} = employeSlice.actions;