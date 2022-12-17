'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <h2 className='font-extrabold text-[24px] leading-[30px] text-primary-white'>
        HT
      </h2>
      <img
        src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain md:hidden block'
      />
      <ul className='md:flex hidden font-light font-mono text-primary-white'>
        <li className='p-2.5 transition duration-200 hover:text-secondary-white'>
          <a href='#'>About</a>
        </li>
        <li className='p-2.5 transition duration-200 hover:text-secondary-white'>
          <a href='#'>Experience</a>
        </li>
        <li className='p-2.5 transition duration-200 hover:text-secondary-white'>
          <a href='#'>Projects</a>
        </li>
        <li className='p-2.5 transition duration-200 hover:text-secondary-white'>
          <a href='#'>Contact</a>
        </li>
        <a href='#' className='p-2.5 ml-4 gradient-btn text-white'>
          <li>Resume</li>
        </a>
      </ul>
    </div>
  </motion.nav>
)

export default Navbar
