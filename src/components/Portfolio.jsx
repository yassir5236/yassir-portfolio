import React from 'react';
import project1 from "../assets/citronix1.jpg"
import project2 from "../assets/credit.png"
import project4 from "../assets/gym.jpg"
import project5 from "../assets/traveling.jpg"
import project6 from "../assets/wrm.jpg"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "The Citronix project is a management application for lemon farms, built with Spring Boot and tested using Postman. It helps farmers track production, harvesting, and sales while optimizing tree productivity and farm management.",
      links: {
        site: "https://github.com/yassir5236/Citronix",
        github: "https://github.com/yassir5236/Citronix",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "A full-stack application built with Java JEE and JavaScript. SmartBank offers a high-quality user interface for simulating and calculating monthly loan payments.",
      links: {
        site: "https://github.com/yassir5236/simulation_credits",
        github: "https://github.com/yassir5236/simulation_credits",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "SPYRO is a comprehensive fitness platform designed to meet the evolving needs of the fitness community. including progress tracking, personalized coaching, and seamless integration for purchasing fitness products using Laravel and the blade",
      links: {
        site: "https://github.com/yassir5236/SPYRO_Gym_Platform_My_PFR",
        github: "https://github.com/yassir5236/SPYRO_Gym_Platform_My_PFR",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "A full-stack application build with react-js and laravel . VisitMorocco project aims to create an online platform dedicated to travel to Morocco, highlighting the country's destinations, activities, travel tips, and cultural experiences using React Native.",
      links: {
        site: "https://github.com/yassir5236/VisitMorocco2",
        github: "https://github.com/yassir5236/VisitMorocco2",
      },
    },
    {
      img: project6,
      title: "Project #5",
      description: " The WRM Waiting Room Management module is built using Spring Boot for backend development, Docker for containerization, and Postman for API testing. This combination ensures a robust, scalable, and efficient system for managing visitor flow and improving the customer experience across various industries",
      links: {
        site: "https://github.com/yassir5236/wrm",
        github: "https://github.com/yassir5236/wrm",
      },
    },
  ]
  const Portfolio = () => {
    return (
      <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } mb-12`}
            >
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.links.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    <AiOutlineGithub />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  };
  
  export default Portfolio;
  