import {useEffect,useState} from 'react';
import SearchInput from '../Components/Search';
import MovieList from '../Components/MovieList';

function HomePage ({favorites, setFavorite})  {  
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY

    const searchMovies = (query) => {
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.Search || []))
    }
    

    return (
        <div>
        <SearchInput onSearch = {searchMovies}></SearchInput>
        <MovieList
            movies = {movies}
            onSelect = {setSelected}
            favorites = {favorites}
            toggleFavorite = {setFavorite}>           
        </MovieList>
        </div>
    )
}

export default HomePage; 