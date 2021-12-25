import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ clicked, handleClick }) => {
  return (
    <div className='flex justify-between items-center h-16 font-mono py-16 px-8 text-lg relative z-10'>
      <Link to='/' className='px-8'>Huy Tran</Link>
      <div className='cursor-pointer md:hidden px-3 py-2' onClick={handleClick} >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>
      <div className={ clicked ? 'block' : 'hidden' }>
        hee
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
  )
}

export default Navbar
