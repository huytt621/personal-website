'use client'

import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { CgMenuRight, CgClose } from 'react-icons/cg'

import { sidebarVariants, itemVariants } from '../utils/motion'

const links = [
  { name: 'About', to: '#', id: 1 },
  { name: 'Experience', to: '#', id: 2 },
  { name: 'Projects', to: '#', id: 3 },
  { name: 'Contact', to: '#', id: 4 },
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
            exit={{ width: 0, transition: { delay: 0, duration: 0.3 } }}
            className='bg-primary-black h-screen w-[18.75rem] fixed inset-y-0 right-0 top-0 z-20 flex flex-col'
          >
            <motion.ul
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={sidebarVariants}
              className='my-24 mx-6 font-light font-mono text-primary-white text-[18px]'
            >
              {links.map(({ name, to, id }) => (
                <motion.li
                  key={id}
                  variants={itemVariants}
                  className='p-5 cursor-pointer transition duration-200 hover:text-secondary-white'
                >
                  <a href={to}>{name}</a>
                </motion.li>
              ))}
              <motion.li
                variants={itemVariants}
                className='p-5 cursor-pointer gradient-entry'
              >
                <a href='#'>Resume</a>
              </motion.li>
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className='p-2 z-30 text-primary-white cursor-pointer md:hidden'>
        {isOpen ? (
          <CgClose className='w-[30px] h-[30px]' onClick={toggleOpen} />
        ) : (
          <CgMenuRight className='w-[30px] h-[30px]' onClick={toggleOpen} />
        )}
      </div>
    </>
  )
}

export default Sidebar
