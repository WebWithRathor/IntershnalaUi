import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./reducers/studentSlice";

export const store = configureStore({
    reducer: {studentSlice},
})