
import { configureStore } from '@reduxjs/toolkit'
import { answersSlice } from './slice/answers/answersSlice'

export const store = configureStore({
    reducer: {
        answers: answersSlice.reducer,
    },
})