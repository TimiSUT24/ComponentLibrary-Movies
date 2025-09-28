import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/Home'
import useFavorites from './Hooks/useFavorites'
import './App.css'

function App() {
  const[favorites, setFavorite] = useFavorites();

  return (
    <BrowserRouter>     
    <nav>
      <Link to ="/">Home</Link> | <Link to= "/tutorial">Tutorial</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage favorites={favorites} setFavorite={setFavorite} />}></Route>    
    </Routes>  
    </BrowserRouter>
  )
}

export default App
