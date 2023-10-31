import Star from "../../Images/Star.svg"
import {motion} from "framer-motion"
const TestimonialCard = (props) => {
  return (
    <motion.div className="w-[30vw] h-[80vh] bg-[#F4EFFF] flex justify-between flex-col px-9 py-12 rounded-[32px]" whileHover={{scale:0.97}} transition={{duration:0.5}} >
        <div className="flex flex-row items-center">
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <h1 className="text-2xl font-Halenior-regular text-black">{props.rating}</h1>
        </div>
        <div>
            <h1 className="text-[22px] font-Halenior-light text-black">{props.review}</h1>
        </div>
        <div className="flex flex-col justify-end">
            <h1 className="font-Halenior-regular text-xl text-black justify-end">{props.reviewer}</h1>
            <h2 className="font-Halenior-light text-lg text-black">{props.Designation}</h2>
        </div>
    </motion.div>
  )
}

export default TestimonialCard