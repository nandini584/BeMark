import Star from "../../Images/Star.svg"
import {motion} from "framer-motion"
import Clutch from "../../Images/clutch.svg"
const TestimonialCard = (props) => {
  return (
    <motion.div className="md:w-[31vw] w-[90vw] md:h-[90vh] h-[72vh] bg-[#F4EFFF] mt-12 md:mt-0 flex justify-between flex-col md:px-9 px-6 md:py-12 py-8 rounded-[32px] md:mx-0 mx-4" whileHover={{scale:0.97}} transition={{duration:0.5}} >
      <motion.div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
            <img src={Star} alt="Rating" className="mr-1 w-5"/>
            <img src={Star} alt="Rating" className="mr-1 w-5"/>
            <img src={Star} alt="Rating" className="mr-1 w-5"/>
            <img src={Star} alt="Rating" className="mr-1 w-5"/>
            <img src={Star} alt="Rating" className="mr-2 w-5"/>
            <h1 className="text-xl font-Halenior-regular text-black">{props.rating}</h1>
        </div>
        <img src={Clutch} alt="clutch verified" className="w-16"/>
      </motion.div>
        <motion.div>
            <h1 className="md:text-[30px] text-xl leading-[1.1] font-Halenior-light text-black">{props.review}<span className="font-Halenior-medium text-[20px]"> Read More</span></h1>
        </motion.div>
        <div className="flex flex-col">
            <h1 className="font-Halenior-semibold md:text-xl text-lg text-black justify-end">{props.reviewer}</h1>
            <h2 className="font-Halenior-light md:text-base text-base text-black">{props.Designation}</h2>
        </div>
    </motion.div>
  )
}

export default TestimonialCard