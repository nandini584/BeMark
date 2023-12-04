import gsap from 'gsap'
import { useEffect} from 'react';
const Portfolio = () => {
    const handleMousemove = (e) => {
      const cursor = document.querySelector('.cursor');
      gsap.to(cursor, { duration: 0.3, left: e.pageX, top: e.pageY, ease: 'power2.out' });
    };
  
    useEffect(() => {
        const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
        t1.to('.our-text', {
          y: '0%',
          duration: 1.5,
          stagger: 0,
        });
      }, []);
      useEffect(() => {
        document.addEventListener('mousemove', handleMousemove);
        return () => {
          document.removeEventListener('mousemove', handleMousemove);
        };
      }, []);
    return (
      <div className=''>
      
      <div className="cursormove bg-[white] md:flex md:flex-row flex-col md:items-center justify-between md:px-[40px] px-6 lg:py-[90px] py-0 hidden">
          <div className="flex flex-col md:items-start justify-between">
              <h1 className="text-[#1D0B3A] md:text-8xl text-3xl font-Halenior-medium mt-8 md:mt-0 main-text"><span className='our-text'>Portfolio</span></h1>
              <div className="flex flex-row md:mt-44 mt-8">
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] md:text-4xl text-3xl tracking-wide font-Halenior-semibold main-text"><span className="our-text leading-none">42</span></h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-6 lg:font-Halenior-regular md:font-Halenior-medium font-Halenior-regular lg:mt-[63px] lg:mr-12 mr-0 main-text"><span className="our-text leading-snug">completed projects</span></h1>
                  </div>
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] md:text-4xl text-3xl tracking-wide font-Halenior-semibold main-text"><span className='our-text leading-none'>25</span></h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-6 lg:font-Halenior-regular md:font-Halenior-medium font-Halenior-regular lg:mt-[63px] main-text"><span className='our-text leading-snug'>awards & features</span></h1>
                  </div>
              </div>
          </div>
          <div>
              <h1 className="text-[#1D0B3A] font-Halenior-medium tracking-tight leading-[1] lg:mt-48 mt-12 lg:text-[40px] text-base lg:w-[38vw] main-text"><span className='our-text leading-[1.16]'>Explore our portfolio—a testament</span><span className='our-text leading-[1.16]'> to our commitment to holistic </span><span className='our-text leading-[1.16]'>design, brand resonance, and </span><span className='our-text leading-[1.16]'>everlasting impressions.</span></h1>
          </div>
      </div>
      <div className="bg-[white] cursormove flex md:flex-row flex-col md:items-center justify-between md:px-[40px] pl-4 lg:py-[90px] py-0 md:hidden">
          <div className="flex flex-col justify-between">
              <h1 className="text-[#1D0B3A] md:text-8xl text-3xl font-Halenior-medium mt-8 md:mt-0">Portfolio</h1>
              <div className="flex flex-row items-center justify-between mt-8">
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] md:text-4xl text-3xl tracking-wide font-Halenior-semibold main-text">42</h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-4 lg:font-Halenior-regular md:font-Halenior-medium font-Halenior-regular lg:mt-[63px] lg:mr-12 ">completed projects</h1>
                  </div>
                  <div className="flex flex-row">
                     <h1 className="text-[#1D0B3A] md:text-[88px] md:text-4xl text-3xl tracking-wide font-Halenior-semibold">25</h1>
                     <h1 className="text-[#1D0B3A] lg:text-[16px] text-xs mt-4 lg:font-Halenior-regular md:font-Halenior-medium font-Halenior-regular lg:mt-[63px]">awards & features</h1>
                  </div>
              </div>
          </div>
          <div>
              <h1 className="text-[#1D0B3A] font-Halenior-medium tracking-tight lg:mt-48 mt-12 lg:text-[40px] leading-snug mb-10 text-base lg:w-[38vw]">Explore our portfolio—a testament to our commitment to holistic design, brand resonance, and everlasting impressions.</h1>
          </div>
      </div>
      <div className='md:cursor cursor'></div>
      </div>
    )
  }
  
  export default Portfolio