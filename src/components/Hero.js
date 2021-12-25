import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center absolute top-0'>
      <h1 className='lg:text-8xl sm:text-6xl text-4xl relative font-medium font-mono typewriter w-max'>
        Hello, I'm Huy
      </h1>
    </div>
  )
}

export default Hero
