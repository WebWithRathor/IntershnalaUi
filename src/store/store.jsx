import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./reducers/studentSlice";
import employeSlice from "./reducers/employeSlice";

export const store = configureStore({
    reducer: {studentSlice,employeSlice},
})