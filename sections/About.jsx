'use client'

import { motion } from 'framer-motion'
import { TypingText } from '../components'

import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Me' textStyles='text-center' />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        Hi! I'm <span className='font-semibold text-white'>Huy</span>. I'm a
        third year student at UC Berkeley majoring in Computer Science and Data
        Science. My academic interests lie in{' '}
        <span className='font-semibold text-white'>
          Algorithms, Distributed Systems, and Cloud Computing
        </span>
        . This past summer, I worked as a{' '}
        <span className='font-semibold text-white'>
          Full Stack Software Engineer
        </span>{' '}
        for the Confluence Collaboration team at{' '}
        <span className='font-semibold text-white'>Atlassian</span>. My task was
        to leverage reactive architecture to develop a responsive and scalable
        notifications microservice. Specifically, I created a new API to query
        for email notification preferences and modernized the user settings page
        for Confluence Cloud.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      ></motion.img>
    </motion.div>
  </section>
)

export default About
