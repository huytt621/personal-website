'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} lg:px-48 sm:px-20 px-8 flex`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex justify-center items-start flex-col relative z-10'>
        <motion.h1
          variants={textVariant(0.1)}
          className={`${styles.heroGreeting} gradient-text`}
        >
          Hi! My name is
        </motion.h1>
        <motion.h1
          variants={textVariant(0.2)}
          className={`${styles.heroHeading} text-primary-white`}
        >
          Huy Tran.
        </motion.h1>
        <motion.h1
          variants={textVariant(0.3)}
          className={`${styles.heroHeading} text-primary-white`}
        >
          I make software.
        </motion.h1>
        <motion.p
          variants={textVariant(0.4)}
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
        </motion.p>
      </div>
    </motion.div>
  </section>
)

export default Hero
