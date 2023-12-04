import React from 'react'
import Project from './Project'
import gsap from 'gsap'
import {useEffect} from "react"
const Projects = () => {
    const handleMousemove = (e) => {
    const cursor = document.querySelector('.cursor');
    const demoComponent = document.querySelector('.demo-component'); // Add the class to your Demo component

    // Check if the mouse is inside the Demo component
    const isInsideDemo = demoComponent && (
      e.pageX > demoComponent.offsetLeft &&
      e.pageX < demoComponent.offsetLeft + demoComponent.offsetWidth &&
      e.pageY > demoComponent.offsetTop &&
      e.pageY < demoComponent.offsetTop + demoComponent.offsetHeight
    );

    // Apply scaling effect based on whether the mouse is inside the Demo component
    const scale = isInsideDemo ? 10 : 1;
    gsap.to(cursor, { duration: 0.3, left: e.pageX, top: e.pageY, scale, ease: 'power2.out' });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMousemove);
    return () => {
      document.removeEventListener('mousemove', handleMousemove);
    };
  }, []);
  return (
    <div className='flex demo-component flex-col items-center md:justify-center mt-[15vh]'>
        <div className='md:flex flex-row '>
            <Project/>
            <Project/>
        </div>
        <div className='md:flex flex-row'>
            <Project/>
            <Project/>
        </div>
        <div className='md:flex flex-row'>
            <Project/>
            <Project/>
        </div>
        <div className='md:flex flex-row'>
            <Project/>
            <Project/>
        </div>
        <div className="cursor"></div>
    </div>
  )
}

export default Projects