import React from 'react'
import Tag from './Tag'

const Project = () => {
  return (
    <div className='bg-billboard project-container'>
        <div className='flex flex-col project-image'>
            <div className='flex flex-row items-center justify-between relative top-[73vh] '>
                <h1 className=' font-Halenior-semibold text-white text-5xl relative left-14'>Yordax</h1>
                <div className='relative right-14'>
                <Tag tag="2022"/>
                </div>
            </div>
            <div className='flex flex-row justify-between items-end relative top-[74vh] '>
                <h1 className=' font-Halenior-semibold text-base text-white relative left-14'>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Hic facilis dolorem, porro, ab dolore volup.</h1>
                <div className='flex flex-col relative right-14'>
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