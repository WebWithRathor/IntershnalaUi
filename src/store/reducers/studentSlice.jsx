import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    student:null
}

const studentSlice = createSlice({
    name:'student',
    initialState,
    reducers: {
        setStudent: (state, action) => {
            state.student = action.payload;
        },
    }
})

export default studentSlice.reducer;
export const {setStudent} = studentSlice.actions;