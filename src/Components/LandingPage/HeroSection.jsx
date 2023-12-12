import { useEffect } from 'react';
import gsap from 'gsap';
import Watchus from './Watchus';

const HeroSection = () => {
  const handleMousemove = (e) => {
    const cursor = document.querySelector('.cursor');
    gsap.to(cursor, { duration: 0.3, left: e.pageX, top: e.pageY, ease: 'power2.out' });
  };

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
    t1.to('.our-text', {
      y: '0%',
      duration: 0.7,
      stagger: 0.2,
    });
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMousemove);
    return () => {
      document.removeEventListener('mousemove', handleMousemove);
    };
  }, []);

  return (
    <div className="bg-white">
          <div className="cursormove flex flex-col justify-between sm:flex-row px-4 sm:px-[40px] pt-6 relative bg-white">
      <div className="w-full sm:w-[65vw] bg-white">
        <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tight font-semibold text-[#1D0B3A] font-Halenior-compact-bold">
            <h1 className="main-text md:text-6xl lg:text-8xl">
              <span className="our-text leading-[1.12]">
                <span className="text-[#1D0B3A]">Innovative</span> <span></span><span className='text-[#7B36FF] '>Design</span> <span className='lg:hidden inline'>Crafted</span>
              </span>
            </h1>
            <h1 className="main-text md:text-6xl lg:text-8xl">
              <span className="our-text leading-[1.12]"><span className="hidden lg:inline">Crafted </span><span className='text-[#7B36FF]'>Experience</span> </span>
            </h1>
            <h1 className="main-text md:text-6xl lg:text-8xl">
              <span className="our-text leading-[1.12]">
                & <span className="text-[#7B36FF]">Transform</span>
              </span>
            </h1>
        </h1>
      </div>
      <div className="mt-24 lg:mt-56 bg-white">
        <Watchus />
      </div>
            </div>
      <div className='md:cursor'></div>
    </div>
  );
}

export default HeroSection;
