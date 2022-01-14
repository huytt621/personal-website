import React from 'react'
import profilePic from '../resources/profile-pic.png'

const About = () => {
  return (
    <div className='flex flex-col grow w-screen lg:flex-row lg:justify-center'>
      <div className='flex flex-col justify-center items-center font-mono'>
        <h1 className='font-bold text-4xl my-1'>Huy Tran</h1>
        <h2 className='my-1 text-center'>
          Software Engineer and Student
          <br />
          From the Bay Area
        </h2>
        <img
          src={profilePic}
          alt='My senior portrait'
          className='h-auto w-1/3 my-10 lg:h-2/3 lg:w-auto animate-bounce-reduced'
        />
      </div>

      <div className='flex flex-col justify-center'>
        <p className='mx-10 mt-10 text-lg w-96 self-center'>
          Hello! I'm currently a second-year student at UC Berkeley, studying
          Computer Science and Data Science. I use my programming skills to
          create full-stack web applications and tools that help me figure out
          the answers to random things I'm curious about. Outside of programming
          and being a student, you can probably find me on the sprinting down a
          track or jumping into sand pits.
        </p>
        <div className='flex justify-center items-center my-8'>
          <a href='https://github.com/huytt621/' target='_blank'>
            <i className='fab fa-github mx-3 fa-2x'></i>
          </a>
          <a href='https://www.linkedin.com/in/huytt621/' target='_blank'>
            <i className='fab fa-linkedin mx-3 fa-2x'></i>
          </a>
          <a href='https://www.facebook.com/huytt621/' target='_blank'>
            <i className='fab fa-facebook mx-3 fa-2x'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
