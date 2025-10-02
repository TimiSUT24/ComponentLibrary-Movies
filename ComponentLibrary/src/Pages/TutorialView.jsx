import {useState} from 'react';
import SearchInput from '../Components/Search';
import MovieList from '../Components/MovieList';
import Favorites from '../Components/FavoriteList';
import MovieDetails from "../Components/MovieDetails";


function Tutorial () {
    const [favorites, setFavorite] = useState([]);

    const demoMovies = [
    { imdbID: "tt6300910", Title: "The Unholy Trinity", Year: "2024", Poster: "https://m.media-amazon.com/images/M/MV5BODU0MjBkNmEtNGVkZi00MjcwLWJlY2EtMGFlN2I1ODY2YzVkXkEyXkFqcGc@._V1_SX300.jpg" },
    { imdbID: "tt15041836", Title: "Werewolves", Year: "2024", Poster: "https://m.media-amazon.com/images/M/MV5BOTc3NDA5ODQtYjQzYS00NWE3LWE1YjYtNjAxNzlhOTE4NjAzXkEyXkFqcGc@._V1_SX300.jpg" }
];

    const handleSearch = (query) => {
    alert("Searching for: " + query);
};

const toggleFavorite = (movie) => {
        const find = favorites.find(f => f.imdbID === movie.imdbID)
        setFavorite(
            find ? favorites.filter(f => f.imdbID !== movie.imdbID) : [...favorites, movie]
        )
    }

    return(
        <div className = "tutorial-view">
            <h1><strong>Component Library Tutorial</strong></h1>
            <p>Here you can see examples of how the components work</p>
            <ul>
                <li>
                <p><strong>----SearchBar----</strong></p>
                <p>Search for movies with title</p>
                <p>How to use {'<SearchInput onSearch = {searchMovies}></SearchInput>'}</p>
                <p>Visual presentation</p>
                <SearchInput onSearch = {handleSearch}></SearchInput>
            </li>

            <li>
                <p><strong>----MovieCard/MovieList----</strong></p>
                <p>MovieCard shows Image,Picture,Title,Year and MovieList shows a list of this MovieCards so they are multiple</p>
                <p>How to use (MovieCard) {'<MovieCard key = {m.imdbID} movie = {m} isFavorite = {favorites.some(f => f.imdbID === m.imdbID)} toggleFavorite = {toggleFavorite} </MovieCard>'}</p>
                <p>(MovieList) {'<MovieList movies = {movies}  favorites = {favorites}  toggleFavorite = {toggleFavorite}> </MovieList>'}</p>
                <p>Visual presentation</p>
                <MovieList
                key={demoMovies.imdbID}
                movies={demoMovies}
                isFavorite={false}
                toggleFavorite={toggleFavorite}
                />
            </li>

            <li>
                <p><strong>----MovieDetails----</strong></p>
                <p>See more info about the movie like actors,plot,Director</p>
                <p>How to use {'<Link to={`/movie/${movie.imdbID}`}>Details</Link>'}</p>
                <p>Visual presentation</p>
                <MovieDetails imdbID = {demoMovies.imdbID = 'tt6300910'}/>
            </li>

            <li>
        <p><strong>----Favorites----</strong></p>
        <p>
            Handles adding/removing movies to a persistent list (localStorage in
            the real app).
        </p>
        <p>
            How to use:{" "}
            <code>
            {`const [favorites, setFavorites] = useFavorites();`}
            <br />
            {`<MovieCard movie={m} isFavorite={favorites.some(...)} toggleFavorite={toggleFavorite} />`}
            </code>
        </p>
        <p>Visual presentation:</p>
        {favorites.length === 0 ? (
            <p>No favorites yet. Click favorite button on a MovieCard to add.</p>
        ) : (
            <ul>
            {favorites.map((f) => (
                <li key={f.imdbID}>{f.Title} ({f.Year})</li>
            ))}
            </ul>
        )}
        </li>
            </ul>                       
        </div>    
    )

}

export default Tutorial;