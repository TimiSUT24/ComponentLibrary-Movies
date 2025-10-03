import { useParams } from "react-router-dom";
import MovieDetails from "../Components/MovieDetails";
import '../CSS/MoviePage.css'

function MoviePage () {
    const {imdbID} = useParams()

    return (
        <div className ="movie-page">
            <MovieDetails imdbID ={imdbID}></MovieDetails>
        </div>
    )
}

export default MoviePage;