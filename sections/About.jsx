'use client'

import { motion } from 'framer-motion'
import { TypingText } from '../components'
import Avatar from '../components/Avatar'

import styles from '../styles'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion'
import { aboutMe, awardsAndHonors } from '../constants'

const About = () => (
  <section
    className={`${styles.paddings} lg:px-48 sm:px-20 px-8 relative z-10 h-screen`}
  >
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Me' textStyles='text-center mb-[40px]' />
      <div className='lg:grid lg:grid-cols-[2fr_3fr] lg:gap-[50px] lg:items-start justify-center flex flex-col-reverse items-center'>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
          <Avatar />
        </motion.div>
        <div>
          {aboutMe.map((paragraph, index) => (
            <motion.p
              variants={fadeIn('up', 'tween', 0.2 * index, 1)}
              className='font-normal sm:text-[16px] text-[14px] lg:max-w-[510px] text-secondary-white justify-self-start mb-[15px]'
              key={index}
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.p
            variants={fadeIn('up', 'tween', 0.2 * aboutMe.length, 1)}
            className='font-normal sm:text-[16px] text-[14px] lg:max-w-[510px] text-secondary-white justify-self-start mb-[15px]'
          >
            Here are some of my awards and honors:
          </motion.p>
          <motion.ul
            variants={fadeIn('up', 'tween', 0.2 * (aboutMe.length + 1), 1)}
            className='font-mono sm:text-[14px] text-[12px] lg:max-w-[510px] text-secondary-white justify-self-start list-disc list-inside'
          >
            {awardsAndHonors.map((item, index) => (
              <motion.li
                variants={fadeIn(
                  'up',
                  'tween',
                  0.2 * (aboutMe.length + 2 + index),
                  1
                )}
                className='mb-[10px]'
              >{`${item.name}`}</motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  </section>
)

export default About
