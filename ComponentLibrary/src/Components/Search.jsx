import {useState} from 'react';

function SearchInput ({onSearch}) {
    const [search, setSearch] = useState(''); //Search by title

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page from reloading
        onSearch(search)
    }

    return(
        <div className = "search-container">
            <form onSubmit ={handleSubmit}>
            <input                 
                    type="text " 
                    placeholder="Search movie" 
                    value= {search}
                    onChange={(e) => setSearch(e.target.value)}                    
                />
                <button type ="submit">Confirm</button>
                </form>
        </div>
    )

}

export default SearchInput;