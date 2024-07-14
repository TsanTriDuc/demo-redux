
//manage number

import { createSlice } from "@reduxjs/toolkit";

// default value == useState(0)
const initialValue = 0;

const demoSlice = createSlice({
    name: "demo",
    initialState: initialValue,
    reducers: {
        increment: (state) => state + 1, //increase 1 number
        decrement: (state) => state - 1, //decrese 1 number
    },
});

// //state => current value
// (state) => {
//     return state + 1;
// }

export const {increment, decrement} = demoSlice.actions;
export default demoSlice.reducer;
