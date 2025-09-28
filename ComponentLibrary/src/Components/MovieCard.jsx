import {Link} from 'react-router-dom'

function MovieCard ({movie, isFavorite, toggleFavorite}) {
    
    return (
        <div className = "movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title} ({movie.Year})</h3>           
            <Link to={`/movie/${movie.imdbID}`}>Details</Link>
            <button onClick = {() => toggleFavorite(movie)}>{isFavorite ? 'Remove ' : 'Favorite'}</button>
        </div>
    )
}

export default MovieCard;