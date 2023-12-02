import gsap from 'gsap'
import { useEffect} from 'react';
const Portfolio = () => {

    useEffect(() => {
        const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
        t1.to('.our-text', {
          y: '0%',
          duration: 1.5,
          stagger: 0,
        });
      }, []);
    return (
      <div className="bg-[white] flex md:flex-row flex-col md:items-center justify-between md:px-[40px] px-6 lg:py-[90px] py-0">
          <div className="flex flex-col md:items-start justify-between animate">
              <h1 className="text-[#1D0B3A] md:text-8xl text-3xl font-Halenior-medium mt-8 md:mt-0 main-text"><span className='our-text'>Portfolio</span></h1>
              <div className="flex flex-row md:mt-44 mt-8">
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] text-4xl font-Halenior-semibold main-text"><span className="our-text leading-none">42</span></h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-6 lg:font-Halenior-regular font-Halenior-medium lg:mt-[63px] lg:mr-12 main-text"><span className="our-text leading-snug">completed projects</span></h1>
                  </div>
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] text-4xl font-Halenior-semibold main-text"><span className='our-text leading-none'>25</span></h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-6 lg:font-Halenior-regular font-Halenior-medium lg:mt-[63px] main-text"><span className='our-text leading-snug'>awards & features</span></h1>
                  </div>
              </div>
          </div>
          <div>
              <h1 className="text-[#1D0B3A] font-Halenior-medium tracking-tight leading-[1] lg:mt-48 mt-12 lg:text-[40px] text-base lg:w-[38vw] main-text"><span className='our-text leading-[1.16]'>Explore our portfolio—a testament</span><span className='our-text leading-[1.16]'> to our commitment to holistic </span><span className='our-text leading-[1.16]'>design, brand resonance, and </span><span className='our-text leading-[1.16]'>everlasting impressions.</span></h1>
          </div>
      </div>
    )
  }
  
  export default Portfolio