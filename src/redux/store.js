import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './features/demoSlice'
import todoSlice from './features/todoSlice'

export const store = configureStore({
  reducer: {
    demo: demoSlice,
    todo: todoSlice
  },
})