
function MovieCard ({movie, onSelect, isFavorite, toggleFavorite}) {
    
    return (
        <div className = "movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick = {() => onSelect(movie.imdbID)}>Details</button>
            <button onClick = {() => toggleFavorite(movie)}>{isFavorite ? 'Remove ' : 'Favorite'}</button>
        </div>
    )
}

export default MovieCard;