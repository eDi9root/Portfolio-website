import React from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../../utils/data'

const Projects = () => {
  return (
    <div>
      <div className='text-white'>
        <div className='max-w-[1200px] h-[40vh] pt-[5rem] mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>
              Recent Projects
            </h1>
            <p className='md:text-xl font-bold text-gray-500'>
              My challenges are continuous, and the outcomes are entirely my own.
            </p>
        </div>
        <div className='max-w-[1200px] mx-auto grid grid-cols-2'>
          <div className="grid place-content-center px-4 py-12 text-zinc-100">
            {PROJECTS.map((item) => ( 
              <ProjectCard title={item.title} content={item.content}/>
              ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
