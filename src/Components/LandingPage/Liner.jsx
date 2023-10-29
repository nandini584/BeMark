import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HorizontalScrollOnScroll = () => {
  const scrollContainerRef = useRef(null);
  const textElementRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const textElement = textElementRef.current;

    const onScroll = () => {
      const textWidth = textElement.offsetWidth;
      const containerWidth = scrollContainer.offsetWidth;

      // Calculate the duration based on the text width
      const duration = textWidth / 150; // Adjust the factor as needed

      gsap.to(textElement, {
        x: -(textWidth - containerWidth),
        duration,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="scroll-text text-[200px] text-[#1D0B3A] font-Halenior-semibold" ref={textElementRef}>
        A Remarkable Presence
      </div>
    </div>
  );
};

export default HorizontalScrollOnScroll;
