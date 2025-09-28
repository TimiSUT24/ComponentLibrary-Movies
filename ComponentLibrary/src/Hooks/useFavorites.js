import {useState, useEffect} from 'react';

function useFavorites (){
    const [favorites, setFavorites] = useState(
        () => JSON.parse(localStorage.getItem('favorites')) || []
    )

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites)); 
    }, [favorites])

    return [favorites, setFavorites];
}

export default useFavorites