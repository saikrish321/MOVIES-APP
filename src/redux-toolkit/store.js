import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from './movieListSlice'

export const store = configureStore({
    reducer: {
        movieList: movieListReducer,
    },
})

