import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[15vh]'>
        <div className='flex flex-row'>
            <Project/>
            <Project/>
        </div>
        <div className='flex flex-row'>
            <Project/>
            <Project/>
        </div>
        <div className='flex flex-row'>
            <Project/>
            <Project/>
        </div>
        <div className='flex flex-row'>
            <Project/>
            <Project/>
        </div>
    </div>
  )
}

export default Projects