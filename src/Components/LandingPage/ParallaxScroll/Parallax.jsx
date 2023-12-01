import { useState, useEffect } from 'react';
import Video from "../../../Video/bemaarkvid.mp4"
import Services from '../Services';
const Parallax = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div>
        <div className="relative flex items-center justify-center">
          <div className="hidden md:inline">
            <Services/>
          </div>
        </div>
      <video
      className="relative md:h-[120vh] w-[100vw] mt-32 overflow-hidden top-0 left-0 bg-cover bg-center md:mt-20"
        src={Video}
        autoPlay
        loop
        muted
        style={{
            transform: `translateY(-${scrollPosition * 0.5}px)`,
          }}
      />
      </div>
    );
  };

export default Parallax