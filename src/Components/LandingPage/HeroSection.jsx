import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Watchus from './Watchus';

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
    t1.to('.our-text', {
      y: '0%',
      duration: 0.7,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="flex flex-row h-[80vh] justify-between px-[40px] pt-12">
      <h1 className="text-8xl tracking-tight font-semibold text-[#1D0B3A] w-[55vw] font-Halenior-compact-semibold">
        <h1 className='main-text'>
          <span className="our-text">
            <span className="text-[#7B36FF]">Innovative</span> Design
          </span>
        </h1>
        <h1 className='main-text'>
          <span className="our-text">Crafted experience</span>
        </h1>
        <h1 className='main-text'>
          <span className="our-text">
            & <span className="text-[#7B36FF]">Transform</span>
          </span>
        </h1>
      </h1>
      <div className="mt-56">
        <Watchus />
      </div>
    </div>
  );
}

export default HeroSection;
