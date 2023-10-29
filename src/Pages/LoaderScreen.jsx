import { TypedText } from "../Components/LandingPage/Animations/TypedText"
import BDAsvg from "../Images/BDA.svg"
import {motion} from "framer-motion"
const LoaderScreen = () => {
  return (
    <div className="flex flex-row items-center justify-center h-[100vh] ">
        <motion.img
        initial={{ opacity: 0, transform: 'translateX(70%)' }}
        animate={{ opacity: 1, transform: 'translateX(0%)' }}
        transition={{ duration: 1.5 }}
        src={BDAsvg} 
        alt="Bemaark digital agency" 
        className="mr-5 w-14"/>
        <motion.div className="flex flex-col"
        initial={{ opacity:0 }}
        transition={{ duration: 1, delay: 1}}
        animate={{ opacity: 1}}>
        <TypedText text="BEMAARK" className="text-[24px] leading-tight font-Halenior-bold text-black"/>
        <TypedText text="DIGITAL" className="text-[24px] leading-tight font-Halenior-medium text-black"/>
        <TypedText text="AGENCY" className="text-[24px] leading-tight font-Halenior-medium text-black"/>
        </motion.div>
    </div>
  )
}

export default LoaderScreen