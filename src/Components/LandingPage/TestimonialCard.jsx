import Star from "../../Images/Star.svg"
import {motion} from "framer-motion"
import Clutch from "../../Images/clutch.svg"
const TestimonialCard = (props) => {
  return (
    <motion.div className="md:w-[30vw] w-[92vw] md:h-[80vh] h-[80vh] bg-[#F4EFFF] mt-12 md:mt-0 flex justify-between flex-col md:px-9 px-6 md:py-12 py-8 rounded-[32px] md:mx-0 mx-4" whileHover={{scale:0.97}} transition={{duration:0.5}} >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <h1 className="text-2xl font-Halenior-regular text-black">{props.rating}</h1>
        </div>
        <img src={Clutch} alt="clutch verified" className="w-16"/>
      </div>
        <div>
            <h1 className="md:text-[22px] text-xl font-Halenior-light text-black">{props.review}</h1>
        </div>
        <div className="flex flex-col justify-end">
            <h1 className="font-Halenior-regular md:text-xl text-lg text-black justify-end">{props.reviewer}</h1>
            <h2 className="font-Halenior-light md:text-lg text-base text-black">{props.Designation}</h2>
        </div>
    </motion.div>
  )
}

export default TestimonialCard