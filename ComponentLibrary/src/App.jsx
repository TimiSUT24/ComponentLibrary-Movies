import { useState } from 'react'
import HomePage from './Pages/Home'
import useFavorites from './Hooks/useFavorites'
import './App.css'

function App() {
  const[favorites, setFavorites] = useFavorites();

  return (
    <>     
      <HomePage></HomePage>     
    </>
  )
}

export default App
