import {useState} from 'react';
import SearchInput from '../Components/Search';
import MovieList from '../Components/MovieList';
import Favorites from '../Components/FavoriteList';
import MovieDetails from "../Components/MovieDetails";
import '../CSS/TutorialView.css';


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
            <p style={{fontSize: '17px'}}>Here you can see examples of how the components work</p>

            <ul className ="tutorials">
                <li className ="searchbar-tutorial">
                <p style={{fontSize:'20px'}}><strong>SearchBar</strong></p>
                <p>Search for movies with title</p>
                <p className="yellow-text">{'</>'} Code example </p>
                <div className ="code-example">                   
                    <p> {`
                    import SearchInput from '../Components/Search';

                    const handleSearch = (query) =>
                    { alert("Searching for:" + query) }

                        <SearchInput onSearch = {handleSearch}></SearchInput>`}                                                                                   
                    </p>
                </div>
                <p className="yellow-text">Live Demo</p>
                <div className ="presentation">
                    <SearchInput onSearch = {handleSearch}></SearchInput>
                </div>
            </li>

            <li className ="movies-tutorial">
                <p style={{fontSize:'20px'}}><strong>MovieCard/MovieList</strong></p>
                <p>MovieCard shows Image,Picture,Title,Year and MovieList shows a list of this MovieCards so they are multiple</p>
                <p className="yellow-text">{'</>'} Code example </p>
                <div className ="code-example">                   
                    <p> {`
                    (MovieCard) 
                    import MovieCard from "./MovieCard";

                    <MovieCard key = {m.imdbID} movie = {m} isFavorite = {favorites.some(f => f.imdbID === m.imdbID)} toggleFavorite = {toggleFavorite} </MovieCard>

                    (MovieList) 
                    import MovieList from '../Components/MovieList';

                    <MovieList movies = {movies}  favorites = {favorites}  toggleFavorite = {toggleFavorite}> </MovieList>
                    `}                                                                                   
                    </p>
                </div>      
                <p className="yellow-text">Live Demo</p>
                <div className="presentations">
                <MovieList
                key={demoMovies.imdbID}
                movies={demoMovies}
                isFavorite={false}
                toggleFavorite={toggleFavorite}
                />
                </div>               
            </li>

            <li className ="movieDetails-tutorial">
                <p style={{fontSize:'20px'}}><strong>MovieDetails</strong></p>
                <p>See more info about the movie like actors,plot,Director</p>
                <p className="yellow-text">{'</>'} Code example </p>
                <div className ="code-example">                   
                    <p> {`
                    import MovieDetails from "../Components/MovieDetails";

                    <MovieDetails imdbID ={imdbID}></MovieDetails>
                    `}                                                                                   
                    </p>
                </div> 
                <p className="yellow-text">Live Demo</p>
                    <MovieDetails imdbID = {demoMovies.imdbID = 'tt6300910'}/>          
            </li>

            <li className ="favorites-tutorial">
        <p style={{fontSize:'20px'}}><strong>Favorites</strong></p>
        <p>
            Handles adding/removing movies to a persistent list (localStorage in
            the real app).
        </p>
        <p className="yellow-text">{'</>'} Code example </p>
        <div className ="code-example">                   
                    <p> {`
                    import Favorites from '../Components/FavoriteList';
                  
                    const [favorites, setFavorite] = useState([]);                  

                    <Favorites
                    favorites = {favorites}
                    removeFavorite = {id => setFavorite(favorites.filter(f => f.imdbID !== id))}>   
                    </Favorites>
                    
                    `}                                                                                   
                    </p>
                </div> 
                
        <p className="yellow-text">Live Demo</p>
        <Favorites
        favorites = {favorites}
        removeFavorite = {id => setFavorite(favorites.filter(f => f.imdbID !== id))}>   
        </Favorites> 
        <button
        onClick={() => {
            const movie = { imdbID: 'tt630091011rrr' };

            const isFavorite = favorites.some(f => f.imdbID === movie.imdbID);

            if (isFavorite) {
                setFavorite(favorites.filter(f => f.imdbID !== movie.imdbID));
            } else {
                setFavorite([...favorites, movie]);
            }
        }}
>Favorite</button>      
        </li>
            </ul>                       
        </div>    
    )

}

export default Tutorial;