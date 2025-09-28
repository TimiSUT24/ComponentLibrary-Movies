import {useState} from 'react';
import SearchInput from '../Components/Search';
import MovieList from '../Components/MovieList';
import Favorites from '../Components/FavoriteList';

function HomePage ({favorites, setFavorite})  {  
    const [movies, setMovies] = useState([]);
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
        <div>
        <SearchInput onSearch = {searchMovies}></SearchInput>
        <MovieList
            movies = {movies}           
            favorites = {favorites}
            toggleFavorite = {toggleFavorite}>           
        </MovieList>

        <Favorites
        favorites = {favorites}
        removeFavorite = {id => setFavorite(favorites.filter(f => f.imdbID !== id))}>   
        </Favorites>
        </div>
    )
}

export default HomePage; 