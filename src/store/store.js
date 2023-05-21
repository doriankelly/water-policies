
import { configureStore } from '@reduxjs/toolkit'
import { answersSlice } from './slice/answers/answersSlice'
import { visitedSlice } from './slice/visited/visitedSlice'

export const store = configureStore({
    reducer: {
        answers: answersSlice.reducer,
        visited: visitedSlice.reducer,

    },
})