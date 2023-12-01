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
      stagger: 0.4,
    });
  }, []);

  useEffect(() => {
    // Add an event listener for mousemove
    document.addEventListener('mousemove', handleMousemove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMousemove);
    };
  }, []);

  return (
    <div className="bg-white">
          <div className="cursormove flex flex-col justify-between sm:flex-row h-[60vh] md:h-[80vh] px-4 sm:px-[40px] pt-6 relative bg-white">
      <div className="w-full sm:w-[55vw] bg-white">
        <h1 className="text-4xl sm:text-8xl tracking-tight font-semibold text-[#1D0B3A] font-Halenior-compact-semibold">
            <h1 className="main-text md:leading-[112px]">
              <span className="our-text">
                <span className="text-[#7B36FF]">Innovative</span> <span></span> Design <span className='md:hidden inline'>Crafted</span>
              </span>
            </h1>
            <h1 className="main-text">
              <span className="our-text"><span className="hidden md:inline">Crafted</span> experience</span>
            </h1>
            <h1 className="main-text">
              <span className="our-text">
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
