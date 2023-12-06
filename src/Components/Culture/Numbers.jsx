import { useEffect } from 'react';
import gsap from 'gsap';
const Numbers = () => {
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
    t1.to('.our-text', {
      y: '0%',
      duration: 0.7,
      stagger: 0.4,
    });
  }, []);
  
  return (
    <div className="flex md:flex-row flex-col md:items-center justify-between md:px-[40px] lg:py-[90px] py-[60px]">
        <div className="flex flex-col items-start justify-between">
            <h1 className="text-black md:text-8xl text-3xl font-Halenior-medium md:px-[30px] px-6 lg:px-0">Numbers</h1>
            <div className="flex flex-row md:mt-36 mt-6 items-end justify-end">
                <div className="flex flex-col mr-20">
                   <h1 className="text-black md:text-4xl text-3xl font-Halenior-semibold md:pl-[40px] ml-6 lg:pl-0 mb-2">Started in</h1>
                   <h1 className="text-black md:text-xl text-3xl font-Halenior-medium md:pl-[40px] ml-6 lg:pl-0">November 2022</h1>
                </div>
                <div className="flex flex-col">
                   <h1 className="text-black md:text-4xl text-3xl font-Halenior-semibold md:pl-[40px] ml-6 lg:pl-0 mb-2">10+ Team member</h1>
                   <h1 className="text-black md:text-xl text-3xl font-Halenior-medium md:pl-[40px] ml-6 lg:pl-0">Counting towards 100+ team members</h1>
                </div>
                
            </div>
        </div>
        <div>
            <h1 className="text-black font-Halenior-medium tracking-tighter lg:tracking-tight leading-tight lg:mt-40 mt-12 lg:text-[30px] text-base lg:w-[40vw] px-[20px] lg:px-0">We never cease our upward trajectory, growing together each day. Beyond business metrics, our growth extends to new creative peaks with every project, elevating together as a digital design agency."</h1>
        </div>
    </div>
  )
}

export default Numbers