import gsap from 'gsap'
import { useEffect} from 'react';
const Culture = () => {

    useEffect(() => {
        const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
        t1.to('.our-text', {
          y: '0%',
          duration: 1.5,
          stagger: 0,
        });
      }, []);
    return (
      <div className="bg-[white] mt-24 flex flex-col justify-between md:px-[40px] px-6">
          <div className="flex flex-col md:items-start justify-between animate">
              <h1 className="text-[#1D0B3A] md:text-8xl text-3xl font-Halenior-medium mt-8 md:mt-0 main-text"><span className='our-text'>Culture</span></h1>
          </div>
          <div className='flex flex-row justify-between items-end my-20'>
            <div className='flex flex-col'>
            <h1 className="md:text-sm opacity-60 text-xs text-black md:font-Halenior-semibold font-Halenior-medium mb-4">Our Values</h1>
            <h1 className="font-Halenior-semibold text-2xl text-[#1D0B3A]">Creative culture</h1>
            <h1 className="font-Halenior-semibold text-2xl text-[#1D0B3A]">Strategic minds</h1>
            <h1 className="font-Halenior-semibold text-2xl text-[#1D0B3A]">Business excellence</h1>
            <h1 className="font-Halenior-semibold text-2xl text-[#1D0B3A]">Excellence in Execution</h1>
            </div>
          <div className=''>
                <h1 className="text-[#1D0B3A] font-Halenior-medium tracking-tight leading-[1] lg:text-[40px] text-base lg:w-[40vw]">
                <h1 className='main-text leading-[1.16]'><span className="our-text">Our team integrates strategic focus</span></h1><h1 className='main-text leading-[1.16]'><span className="our-text"> into every project, ensuring </span></h1><h1 className='main-text leading-[1.16]'><span className="our-text">marketing-savvy designs that are</span></h1><h1 className='main-text leading-[1.16]'><span className="our-text"> effective and inspiring.</span></h1></h1>
          </div>
          </div>
      </div>
    )
  }
  
  export default Culture