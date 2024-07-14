import { createSlice } from "@reduxjs/toolkit";



//default value
const inititalValue =[];

const todoSlice = createSlice({
    name: "todo",
    initialState: inititalValue,
    reducers:{
        // add: (state, action) => {
        //     const newTask = action.payload
        //     state.push(newTask); //update newTask
        //     return state
        // },
        add: (state, action) => [...state, action.payload],
        remove: (state, action) => {
            const index = action.payload;
            //splice: delete elment in array
            state.splice(index,1);
            return state;

        },
        toggle: () => {},
        clear: () => inititalValue,
    },
})

export const {add, remove, toggle, clear} = todoSlice.actions

export default todoSlice.reducer