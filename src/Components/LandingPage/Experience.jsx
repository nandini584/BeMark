import Priya from "../../Images/Priya.svg"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RightArrow from "../../Images/RightArrow.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity:1,
        scale:1,
        transformOrigin: ['100% 0%', '100% 0%'],
      });
    }
  }, [controls, inView]);
  return (
    <motion.div 
    ref={ref}
    initial={{ opacity: 0, scale: 0}}
    transition={{
      ease: 'linear',
      duration: 1,
    }}
    animate={controls}
    className="md:w-[41vw] md:h-[54vh] h-[56vh] bg-[#1D0B3A] md:rounded-[45px] rounded-[32px] md:p-12 flex flex-col md:ml-20 mt-4 px-5 pt-8">
      <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 0.6, delay: 0.6 }}
          className="z-100"
          
          >
        <h1 className="md:text-base text-xs text-white md:font-Halenior-medium font-Halenior-regular mb-2">Experience</h1>
        <h1 className="md:text-[30px] text-xl leading-tight md:font-Halenior-compact-semibold font-Halenior-regular text-white">Our crew got tons of experience, so you know we'll come through with cool stuff and make sure our communication game is on point.</h1>
        <div className="flex flex-row items-center justify-between md:mt-16 mt-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row items-center">
            <img src={Priya} alt="co-founder" className="md:mr-4 mr-2 md:w-16 w-10 inline-block"/>
            <div className="inline-block">
            <h1 className="md:font-Halenior-bold font-Halenior-regular text-white md:text-lg text-xs">Priya Gupta</h1>
            <h1 className="font-Halenior-light text-white md:text-base text-xs inline-block">Co-founder & CMO</h1>
            </div>
            </div>
            <div className="inline-block">
            <div className="flex flex-row items-center md:ml-28 md:mt-4 mt-2">
            <h1 className="md:font-Halenior-medium font-Halenior-regular text-white md:text-base text-xs md:mr-4 mr-3 ml-[110px] md:ml-0">Discuss the project</h1>
            <div className="border-white border-2 rounded-full cursor-pointer z-10 relative overflow-hidden mr-4" >
      <div className="circle" style={{ position: 'relative', width: '36px', height: '36px'}}>
        <ArrowForwardIcon style={{ color: 'white' }} className="icon z-100 hover:color-purple" />
        <div className="fill bg-white"></div>
      </div></div>
            </div>
            </div>
          </div>
        </div>
        </motion.div>
    </motion.div>
  )
}

export default Experience