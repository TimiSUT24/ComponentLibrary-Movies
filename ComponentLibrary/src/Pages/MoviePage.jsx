import { useParams, Link } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails";

function MoviePage () {
    const {imdbID} = useParams()

    return (
        <div className ="movie-page">
            <MovieDetails imdbID ={imdbID}></MovieDetails>
        </div>
    )
}

export default MoviePage;