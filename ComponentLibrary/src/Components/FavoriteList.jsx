
function Favorites ({favorites = [], removeFavorite}){
    return(
        <div className = "favorites">
            <h2>Favorites</h2>
            {favorites.length === 0 && <p>No favorites</p>}
            {favorites.map(m => (
                <div key ={m.imdbID} className = "favo-item">
                    <span>{m.Title}</span>
                    <button onClick= {() => removeFavorite(m.imdbID)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Favorites