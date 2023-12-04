import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "../../Images/Porfolios/Packaging.svg"
import Arrow from "../../Images/TiitArrow.svg"
gsap.registerPlugin(ScrollTrigger);
const Dribbble = () => {
    useEffect(() => {
        gsap.to('.img1', {
          scrollTrigger: {
            trigger: '.img1',
            scrub: 2.5,
            start: "-100px top",
            end: "top 100px"
          },
          x:-30,
          y:-30,
          duration: 4,
          ease: 'expo.Out',
        });
        gsap.to('.img2', {
          scrollTrigger: {
            trigger: '.img2',
            scrub: 2.5,
            start: "-100px top",
            end: "top 100px"
          },
          x:30,
          y:-30,
          duration: 4,
          ease: 'expo.Out',
        });
        gsap.to('.img3', {
          scrollTrigger: {
            trigger: '.img3',
            scrub: 2.5,
            start: "-600px top",
            end: "top 100px"
          },
          x:-30,
          y:30,
          duration: 4,
          ease: 'expo.Out',
        });
        gsap.to('.img4', {
          scrollTrigger: {
            trigger: '.img4',
            scrub: 2.5,
            start: "-600px top",
            end: "top 100px"
          },
          x:30,
          y:30,
          duration: 4,
          ease: 'expo.Out',
        });
      }, []); 
  return (
    <div className='flex flex-col md:my-16'>
        <div className='flex flex-row items-center justify-around'>
            <img src={Image} alt="" className='md:w-[40vw] w-[45vw] img1'/>
            <img src={Image} alt="" className='md:w-[40vw] w-[45vw] img2'/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center md:mb-8 mb-4'>
            <h1 className="font-Halenior-semibold md:text-5xl text-xl text-[#1D0B3A]">Our creativity doesn't end </h1>
            <h1 className="font-Halenior-semibold md:text-5xl text-xl text-[#1D0B3A]">on projects only</h1>
            </div>
            <div className='border flex flex-row items-center justify-center border-black md:py-2 py-1 md:px-8 px-4 rounded-full font-Halenior-medium md:text-xl text-sm'>Dribbble <img src={Arrow} alt="" className='ml-4 w-2'/></div>
        </div>
        <div className='flex flex-row items-center justify-around'>
            <img src={Image} alt="" className='md:w-[40vw] w-[45vw] img3'/>
            <img src={Image} alt="" className='md:w-[40vw] w-[45vw] img4'/>
        </div>
    </div>
  )
}

export default Dribbble