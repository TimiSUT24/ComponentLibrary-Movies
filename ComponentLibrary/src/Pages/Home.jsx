import {useEffect,useState} from 'react';
import SearchInput from '../Components/Search';

const HomePage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState(null);

    

    return (
        <div>
        <SearchInput onSearch = {setQuery}>
        </SearchInput>
        </div>
    )
}

export default HomePage; 