import Heading from "./heading"

import InputElement from "./inputelement"

import { useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import { fetchMovies, updateInputVal, addToFavMovieList, removeMovieFromFavList } from "../redux-toolkit/movieListSlice"

import MovieList from './movielist'

import "./mainpage.css"

import AddFavourite from "./addFavourite"

import RemoveFavourite from "./removefavourite"




const Mainpage = () => {

    const { movieList, inputVal, favMovieList } = useSelector((state) => state.movieList)
    const dispatch = useDispatch()


    console.log(movieList, inputVal, favMovieList, "in main page")

    const url = `https://www.omdbapi.com/?s=${inputVal}&apikey=c5ea1517`
    useEffect(() => {
        dispatch(fetchMovies(url));
    }, [inputVal]);

    const updateInputName = (e) => {
        dispatch(updateInputVal(e.target.value));
    }

    const renderToFavourite = (movie) => {
        dispatch(addToFavMovieList(movie));
        localStorage.setItem("favo-movies-list", JSON.stringify(favMovieList))
    }


    const removeFromFavList = (movie) => {
        dispatch(removeMovieFromFavList(movie));
        const filteredList = favMovieList.filter((element) => {
            if (element.imdbID !== movie.imdbID) {
                return true;
            } else {
                return false;
            }
        })
        localStorage.setItem("favo-movies-list", JSON.stringify(filteredList))

    }


    return (
        <div className="container-fluid main-app">
            <div className="d-flex flex-row justify-content-between align-items-center ">
                <Heading name="Movies" />
                <InputElement updateInputName={updateInputName} />
            </div >
            <div className="row ">
                <div className="d-flex flex-row justify-content-start align-items-center movie-list ">
                    <MovieList movieList={movieList} Favourite={AddFavourite} renderToFavourite={renderToFavourite} />
                </div>
            </div>
            <div className="d-flex flex-column align-items-start ml-4">
                <Heading name="Favourite Movies" />
            </div>
            <div className="row ">
                <div className=" d-flex flex-row justify-content-start align-items-center movie-list">
                    <MovieList movieList={favMovieList} Favourite={RemoveFavourite} renderToFavourite={removeFromFavList} />
                </div>
            </div>

        </div >
    )
}


export default Mainpage;