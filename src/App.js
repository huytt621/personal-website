import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'

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
    <div className='absolute h-screen flex flex-col'>
      <Navbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Hero />} />
      </Routes>
    </div>
  )
}

export default App
