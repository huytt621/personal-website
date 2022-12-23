import React from 'react'

const Avatar = () => {
  return (
    <div className='w-[240px] h-[240px] lg:w-[320px] lg:h-[320px] lg:mt-[28px] mt-[50px] gradient-border z-[0] flex justify-center items-center relative rounded-md justify-self-end'>
      <img
        src='headshot.jpg'
        className='w-[240px] h-[240px] lg:w-[320px] lg:h-[320px] object-cover relative fixed z-10 absolute top-[-20px] left-[-20px] rounded-md'
      />
    </div>
  )
}

export default Avatar
