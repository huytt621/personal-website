'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} xl:px-48 sm:px-24 px-8 flex`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-start flex-col relative z-10'>
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroGreeting} gradient-text`}
        >
          Hi! My name is
        </motion.h1>
        <motion.h1
          variants={textVariant(1.2)}
          className={`${styles.heroHeading} text-primary-white`}
        >
          Huy Tran.
        </motion.h1>
        <motion.h1
          variants={textVariant(1.3)}
          className={`${styles.heroHeading} text-primary-white`}
        >
          I make software.
        </motion.h1>
        <motion.p
          variants={textVariant(1.4)}
          className='max-w-xl mt-[12px] font-normal sm:text-[20px] text-[16px] text-secondary-white'
        >
          I'm a third year student at{' '}
          <span className='font-semibold text-primary-white'>UC Berkeley</span>{' '}
          majoring in Computer Science and Data Science. My academic interests
          lie in{' '}
          <span className='font-semibold text-primary-white'>Algorithms</span>,{' '}
          <span className='font-semibold text-primary-white'>
            Distributed Systems
          </span>
          , and{' '}
          <span className='font-semibold text-primary-white'>
            Cloud Computing
          </span>
          . This past summer, I worked as a{' '}
          <span className='font-semibold text-primary-white'>
            Full Stack Software Engineer
          </span>{' '}
          for the Confluence Collaboration team at{' '}
          <span className='font-semibold text-primary-white'>Atlassian</span>.{' '}
          {/*My task*/}
          {/* was to leverage reactive architecture to develop a responsive and
          scalable notifications microservice. Specifically, I created a new API
          to query for email notification preferences and modernized the user
          settings page for Confluence Cloud. */}
        </motion.p>
      </div>

      {/* <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
      >
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
        <img
          src='/cover.png'
          alt='cover'
          className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
        />

        <a href='#explore'>
          <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
            <img
              src='/stamp.png'
              alt='stamp'
              className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
            />
          </div>
        </a>
      </motion.div> */}
    </motion.div>
  </section>
)

export default Hero
