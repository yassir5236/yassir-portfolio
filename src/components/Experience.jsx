import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    id: 1,
    company: 'STRYVE SOLUTIONS | MARRAKECH',
    period: 'Internship, May - July 2024',
    description: 'Developed the VisitMorocco website, a travel platform for Morocco, using ReactJS for the front end and Laravel for the back end.',
  },
  {
    id: 2,
    company: 'FREELANCE DESIGNER',
    period: 'January 2022 - September 2023',
    description: 'Designed logos and illustrations for clients on platforms such as TeePublic and Redbubble.',
  },
  {
    id: 3,
    company: 'BENYOT COMPANY | TAMELLALT',
    period: 'August 2020 - September 2021',
    description: 'Responsible for overseeing the installation, maintenance, and management of water supply systems. Ensured efficient operation of pipelines, pumps, and water treatment facilities to meet the needs of the community.',
  },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience) => (
          <Reveal key={experience.id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-purple-600 p-6 rounded-lg shadow-md
                          hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience
