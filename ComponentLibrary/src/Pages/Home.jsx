import {useState} from 'react';
import SearchInput from '../Components/Search';
import MovieList from '../Components/MovieList';
import Favorites from '../Components/FavoriteList';
import '../CSS/HomePage.css'

function HomePage ({favorites, setFavorite})  {  
    const [movies, setMovies] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY

    const searchMovies = (query) => {
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.Search || []))
    }

    const toggleFavorite = (movie) => {
        const find = favorites.find(f => f.imdbID === movie.imdbID)
        setFavorite(
            find ? favorites.filter(f => f.imdbID !== movie.imdbID) : [...favorites, movie]
        )
    }
    

    return (
        <div className ="home-page">
        <button 
          className="favorites-toggle" 
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "Close Favorites" : "Show Favorites"}
        </button>
        <div className ={`favorites ${showFavorites ? "open" : ""}`}>
        <Favorites
        favorites = {favorites}
        removeFavorite = {id => setFavorite(favorites.filter(f => f.imdbID !== id))}>   
        </Favorites>
        </div>

        <div className ="main-content">
            <h1>MoviePop</h1>
            <SearchInput onSearch = {searchMovies}></SearchInput>

            <MovieList
            movies = {movies}           
            favorites = {favorites}
            toggleFavorite = {toggleFavorite}>           
            </MovieList>
        </div>                  
    </div>
    )
}

export default HomePage; 