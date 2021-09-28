import "./mainpage.css"

const movieList = (props) => {
    const Favourite = props.Favourite
    return (
        <>
            {props.movieList.map((movie, index, array) => {
                return <div className="movie-card m-3">
                    <img src={movie.Poster} alt="movie" className="movie-card" />
                    <div className="overlay d-flex flex-row align-items-center justify-content-center" onClick={() => props.renderToFavourite(movie)}><Favourite /></div>
                </div>
            })}
        </>
    )
}

export default movieList;