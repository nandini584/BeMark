import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ILoveBemmark from '../LandingPage/ILoveBemmark';
import CanvasImg from '../../Images/Canvas.svg';

const Canvas = () => {
  const parallaxRef = useRef(null);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',    
  };
  
  const backgroundImageStyle = {
    background: `url(${CanvasImg})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    overflow:'hidden'
  };

  const handleScroll = ({ target: { scrollTop } }) => {
    // Get the scroll position
    const scrollPosition = scrollTop;

    // Calculate the new position for ILoveBemmark based on the scroll position
    const iloveBemmarkPosition = Math.max(0, 1.5 - scrollPosition / 500); // Adjust the divisor for the scroll speed

    // Update the ILoveBemmark position using the parallaxRef
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(iloveBemmarkPosition);
    }
  };
 
  return (
    <div style={containerStyle} onScroll={handleScroll} className="md:my-20 overflow-y-hidden overflow-x-hidden">
      <Parallax ref={parallaxRef} pages={4}>
        {/* Background Layer */}
        <ParallaxLayer offset={0} speed={0} style={{ ...backgroundImageStyle, position: 'absolute' }} />

        {/* ILoveBemmark Layer */}
        <ParallaxLayer offset={1.5} sticky={{ start: 0, end: 3 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ILoveBemmark />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Canvas;
