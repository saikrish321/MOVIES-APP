import { createSlice } from '@reduxjs/toolkit'

import axios from "axios"
let arraReq;
if (localStorage.getItem("favo-movies-list")) {
    arraReq = JSON.parse(localStorage.getItem("favo-movies-list"))
    console.log(arraReq, "in halallal")
} else {
    arraReq = []
}

const initialState = {
    movieList: [],
    inputVal: "",
    favMovieList: arraReq,
}

export const movieListSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movieList = action.payload
        },
        updateInputVal: (state, action) => {
            state.inputVal = action.payload
        },
        addToFavMovieList: (state, action) => {
            // const prevMovies = state.favMovieList
            console.log(action.payload, "in reducer")
            state.favMovieList = [...state.favMovieList, action.payload]
        },
        removeMovieFromFavList: (state, action) => {
            console.log(action.payload, "ggg")
            const filteredList = state.favMovieList.filter((movie) => {
                if (movie.imdbID !== action.payload.imdbID) {
                    return true;
                } else {
                    return false;
                }
            }
            )
            console.log(filteredList, "in reducer remove")
            state.favMovieList = filteredList
        }
    },
})

// Action creators are generated for each case reducer function
export const { addMovies, updateInputVal, addToFavMovieList, removeMovieFromFavList } = movieListSlice.actions

export default movieListSlice.reducer

export const fetchMovies = (url) => {
    return (dispatch) => {
        axios.get(url)
            .then((data) => {
                console.log(data, "IN fetch")
                if (data.data.Search) {
                    dispatch(addMovies(data.data.Search));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
