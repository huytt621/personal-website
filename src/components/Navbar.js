import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavData } from './NavData'
import './Navbar.css'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <div className='font-mono'>
      <div className='flex justify-between items-center h-16 py-16 px-8 text-lg relative z-10'>
        <Link to='/' className='px-8'>Huy Tran</Link>
        <div className='cursor-pointer md:hidden px-3 py-2' onClick={toggleSidebar} >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
        <div className='md:block hidden'>
          <Link to='/' className='p-4 hover:bg-slate-100 rounded-md mx-3'>
            About
          </Link>
          <Link to='/' className='p-4 hover:bg-slate-100 rounded-md mx-3'>
            Resume
          </Link>
          <Link to='/' className='p-4 hover:bg-slate-100 rounded-md mx-3'>
            Contact
          </Link>
        </div>
      </div>
      <div className={`w-screen h-screen fixed z-20 bg-white top-0 flex justify-center ${showSidebar ? 'active' : 'inactive'}`}>
        <div className='cursor-pointer px-3 py-2 right-8 mt-10 absolute' onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <ul className='text-4xl flex justify-center items-center flex-col'>
          { NavData.map((item, index) => (
            <li key={index} className='flex justify-center items-center p-4'>
              <Link to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
