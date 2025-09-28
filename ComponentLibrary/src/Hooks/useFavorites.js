import {useState, useEffect} from 'react';

function useFavorites (){
    const [favorites, setFavorite] = useState(
        () => JSON.parse(localStorage.getItem('favorites')) || []
    )

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites)); 
    }, [favorites])

    return [favorites, setFavorite];
}

export default useFavorites