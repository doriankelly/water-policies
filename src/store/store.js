
import { configureStore } from '@reduxjs/toolkit'
import { answersSlice } from './slice/answers/answersSlice'
import { visitedSlice } from './slice/visited/visitedSlice'
import { scoreSlice } from './slice/score/scoreSlice'

export const store = configureStore({
    reducer: {
        answers: answersSlice.reducer,
        visited: visitedSlice.reducer,
        score: scoreSlice.reducer,

    },
})