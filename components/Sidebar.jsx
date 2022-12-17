'use client'

import { AnimatePresence, motion, useCycle } from 'framer-motion'

import { sidebarVariants, itemVariants } from '../utils/motion'

const links = [
  { name: 'About', to: '#', id: 1 },
  { name: 'Experience', to: '#', id: 2 },
  { name: 'Projects', to: '#', id: 3 },
  { name: 'Contact', to: '#', id: 4 },
  { name: 'Resume', to: '#', id: 5 },
]

const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 'min(75vw, 400px)' }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
            className='bg-primary-black h-screen w-[18.75rem] fixed inset-y-0 right-0 top-0 z-20'
          >
            <motion.ul
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={sidebarVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.li key={id} variants={itemVariants}>
                  <a href={to}>{name}</a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
      <img
        src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain md:hidden z-30'
        onClick={toggleOpen}
      />
    </>
  )
}

export default Sidebar
