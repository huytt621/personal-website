import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 relative font-mono py-16 px-8 text-lg'>
      <Link to='/' className='px-8'>Huy Tran</Link>
      <div className='cursor-pointer md:hidden p-6'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>
      <div className='md:block hidden'>
        <Link to='/' className='p-4 hover:bg-slate-100 rounded-md'>
          About
        </Link>
        <Link to='/' className='p-4 hover:bg-slate-100 rounded-md'>
          Resume
        </Link>
        <Link to='/' className='p-4 hover:bg-slate-100 rounded-md'>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
