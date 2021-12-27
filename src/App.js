import React, { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Routes,
 } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  useEffect(() => {
    const hideSidebar = () => {
      if (window.innerWidth > 768 && showSidebar) {
        setShowSidebar(false)
      }
    }

    window.addEventListener('resize', hideSidebar)

    return () => {
      window.removeEventListener('resize', hideSidebar)
    }
  })

  return (
    <Router className='relative'>
      <Navbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Hero />
    </Router>
  )
}

export default App;
