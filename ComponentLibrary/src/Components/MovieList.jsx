import MovieCard from "./MovieCard";

function MovieList ({movies, onSelect, favorites = [], toggleFavorite}) {

    return (
        <div className = "movie-list">
        {movies.map(m => (
            <MovieCard
                key = {m.imdbID}
                movie = {m}
                onSelect = {onSelect}
                isFavorite = {favorites.some(f => f.imdbID === m.imdbID)}
                toggleFavorite = {toggleFavorite}>               
            </MovieCard>
        ))}
        </div>
    )
    
}

export default MovieList;