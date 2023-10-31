import { useEffect } from 'react';
import gsap from 'gsap';
import {motion} from "framer-motion"
import BDAsvg from "../../../Images/BDA.svg"
import { TypedText } from './TypedText';
import LandingPage from '../../../Pages/LandingPage';
const TransitionPlay = () => {
  useEffect(() => {
    const svg = document.getElementById('svg');
    const tl = gsap.timeline();
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

    tl.from('.loader-wrap-heading h1', {
      delay: 1,
      y: 200,
      skewY: 10,
    }).to('.loader-wrap-heading h1', {
      delay: 1.5,
      y: -200,
      skewY: 10,
    });

    tl.to(svg, {
      duration: 0.8,
      attr: { d: curve },
      ease: 'power2.easeIn',
    }).to(svg, {
      duration: 0.8,
      attr: { d: flat },
      ease: 'power2.easeOut',
    });

    tl.to('.loader-wrap', {
      y: -1500,
    });

    tl.to('.loader-wrap', {
      zIndex: -1,
      display: 'none',
    });

    tl.from('.container h1', {
      y: 100,
      opacity: 0,
    }, '-=1.5');
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <div>
      <div className="absolute z-10 h-[100vh] w-[100vw] flex overflow-hidden items-center justify-center bg-transparent loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute top-0 w-[100vw] h-[110vh]">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div className="loader-wrap-heading">
        <div className="flex flex-row items-center justify-center h-[100vh] ">
        <motion.img
        initial={{ opacity: 0, transform: 'translateX(70%)' }}
        transition={{ duration: 1.5 }}
        animate={{ opacity: 1, transform: 'translateX(0%)'}}
        src={BDAsvg} 
        alt="Bemaark digital agency" 
        className="mr-4 w-6"/>
        <motion.div className="flex flex-col"
        initial={{ opacity:0, color:"white"}}
        transition={{ duration: 1, delay: 1}}
        animate={{ opacity: 1, color:"black"}}>
        <TypedText text="bemaark" className="text-[28px] leading-tight font-Halenior-semibold text-white"/>
        </motion.div>
    </div>
        </div>
      </div>
      <LandingPage/>
    </div>
  );
}

export default TransitionPlay;
