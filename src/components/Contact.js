import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center grow'>
      <div className=''>
        <h1 className='font-mono font-bold text-center text-4xl'>Contact Me</h1>
        <p className='text-center my-5'>
          Let's have a chat!
          <br />
          Here are the best ways to get into contact with me.
        </p>
        <div className='flex'>
          <a href='mailto:huytran@berkeley.edu' className='mr-5 flex'>
            <svg
              className='w-6 h-6 mr-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            huytran@berkeley.edu
          </a>
          <a className='flex' href='tel:408-594-8987'>
            <svg
              className='w-6 h-6 mr-0.5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
              />
            </svg>
            (408) 594-8987
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
