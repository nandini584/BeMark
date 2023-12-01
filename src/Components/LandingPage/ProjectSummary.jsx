import { useEffect } from 'react';
import gsap from 'gsap';
const ProjectSummary = () => {
  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
    t1.to('.our-text', {
      y: '0%',
      duration: 0.7,
      stagger: 0.4,
    });
  }, []);
  
  return (
    <div className="bg-project flex md:flex-row flex-col md:items-center justify-between md:px-[40px] lg:py-[90px] py-[60px]">
        <div className="flex flex-col items-start justify-between">
            <h1 className="text-[#7B36FF] md:text-8xl text-3xl font-Halenior-light md:px-[30px] px-6 lg:px-0">Our projects</h1>
            <div className="flex flex-row md:mt-36 mt-6">
                <div className="flex flex-row">
                   <h1 className="text-black md:text-[110px] text-3xl font-Halenior-regular md:pl-[40px] ml-6 lg:pl-0">48</h1>
                   <h1 className="text-black lg:text-[20px] text-xs mt-6 lg:font-Halenior-bold font-Halenior-regular lg:mt-[60px] md:mr-16 mr-0 lg:mr-20">completed projects</h1>
                </div>
                <div className="flex flex-row">
                   <h1 className="text-black md:text-[110px] text-3xl font-Halenior-regular ml-6">25</h1>
                   <h1 className="text-black lg:text-[20px] text-xs mt-6 lg:font-Halenior-bold font-Halenior-regular lg:mt-[60px] md:mr-20">awards & features</h1>
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-black font-Halenior-regular tracking-tighter lg:tracking-tight leading-tight lg:mt-40 mt-12 lg:text-[34px] text-base lg:w-[35vw] px-[20px] lg:px-0">Bemaark's impressive portfolio showcases numerous successful projects. We've left no doubt—we've got the receipts!</h1>
        </div>
    </div>
  )
}

export default ProjectSummary