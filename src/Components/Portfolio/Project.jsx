import React from 'react'
import Tag from './Tag'

const Project = () => {
  return (
    <div className='bg-portfolio2 project-container bg-no-repeat bg-cover md:w-[50vw] md:h-[100vh] py-4'>
        <div className='md:flex flex-col project-image'>
            <div className='flex flex-row items-center justify-between relative md:top-[73vh] top-44'>
                <h1 className=' md:font-Halenior-semibold text-white md:text-5xl text-2xl relative left-4 md:left-14'>Yordax</h1>
                <div className='relative md:right-10 right-4'>
                <Tag tag="2022"/>
                </div>
            </div>
            <div className='flex flex-row justify-between items-end relative top-[74vh] '>
                <h1 className=' font-Halenior-semibold text-base text-white relative left-14'>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Hic facilis dolorem, porro, ab dolore volup.</h1>
                <div className='flex flex-col relative right-10'>
                    <Tag tag="Brand Identity"/>
                    <Tag tag="Web Design"/>
                    <Tag tag="User Research"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project