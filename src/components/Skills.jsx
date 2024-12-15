import React from "react"
import { SiTailwindcss } from "react-icons/si";
import { SiSpringboot } from 'react-icons/si';


import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiAngularSimple,
  DiJavascript1,
  DiReact,
  DiMysql,
  DiJava,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Angular', icon: <DiAngularSimple className='text-green-500' /> },
        { name: 'Tailwind', icon: <SiTailwindcss className='text-blue-300' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Java', icon: <DiJava className='text-orange-500' /> },
        { name: 'SpringBoot', icon: <SiSpringboot className='text-green-600' /> },
        { name: 'Mysql', icon: <DiMysql className='text-blue-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-500' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various frontend and fullstack projects. Check them <a href="https://github.com/yassir5236" className="underline">there</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
