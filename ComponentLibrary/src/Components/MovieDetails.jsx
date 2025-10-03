import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function MovieDetails ({imdbID}) {
    const [details, setDetails] = useState(null)
    const apiKey = import.meta.env.VITE_API_KEY

    useEffect (() => {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [imdbID, apiKey]) 

    if(!details){
        return <p>Loading...</p>
    }

    return(
        <div className ="movie-details">                                       
            <img src={details.Poster} alt={details.Title} />
            <h1>{details.Title} ({details.Year})</h1>
            <div className ="p-tags">
            <p className ="p1"><strong>Director:</strong> {details.Director}</p>
            <p className ="p2"><strong>Actors:</strong> {details.Actors}</p>
            <p className ="p3"><strong>Plot:</strong> {details.Plot}</p>
            </div>

            <Link to="/">Back</Link>
        </div>
    )

}

export default MovieDetails;