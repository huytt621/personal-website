'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'
import { ProjectCard, TitleText, TypingText } from '../components'
import { projects } from '../constants'

const Projects = () => {
  const [active, setActive] = useState('gitlet')
  return (
    <section className={`${styles.paddings} h-screen`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| My Projects' textStyles='text-center' />
        <TitleText
          title={
            <>
              Here are some things <br className='md:block hidden' /> I've
              worked on
            </>
          }
          textStyles='text-center'
        />

        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
