import { TypedText } from "../Components/LandingPage/Animations/TypedText"
import BDAsvg from "../Images/BDA.svg"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"
const LoaderScreen = () => {
  return (
    <motion.div className="">
      
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="flex flex-row items-center justify-center bg-[#1D0B3A] absolute top-0 left-0 w-full h-full"
      >
        <motion.img
          initial={{ opacity: 0, transform: 'translateX(70%)' }}
          animate={{ opacity: 1, transform: 'translateX(0%)' }}
          transition={{ duration: 1.5 }}
          src={BDAsvg}
          alt="Bemaark digital agency"
          className="mr-4 w-6"
        />
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          animate={{ opacity: 1 }}
        >
          <Link to="/">
            <TypedText text="bemaark" className="text-[28px] leading-tight font-Halenior-semibold text-white" />
          </Link>
        </motion.div>
      </motion.div>
      </motion.div>
  )
}

export default LoaderScreen