import {useEffect, useState} from 'react'

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
            <Link to="/">Back</Link>
            <h1>{details.Title} ({details.Year})</h1>
            <img src={details.Poster} alt={details.Title} />
            <p><strong>Director:</strong> {details.Director}</p>
            <p><strong>Actors:</strong> {details.Actors}</p>
            <p><strong>Plot:</strong> {details.Plot}</p>
        </div>
    )

}

export default MovieDetails;