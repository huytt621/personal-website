import React, { useState } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
 } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)

  return (
    <Router className='relative'>
      <Navbar clicked={clicked} handleClick={handleClick} />
      <Hero />
    </Router>
  )
}

export default App;
