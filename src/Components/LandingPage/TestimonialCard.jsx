import Star from "../../Images/Star.svg"
import {motion} from "framer-motion"
const TestimonialCard = (props) => {
  return (
    <motion.div className="w-[30vw] h-[80vh] bg-[#7B36FF] flex justify-between flex-col px-9 py-12 rounded-[32px]" whileHover={{scale:0.95}}>
        <div className="flex flex-row items-center">
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <img src={Star} alt="Rating" className="mr-3"/>
            <h1 className="text-2xl font-bold text-white">{props.rating}</h1>
        </div>
        <div>
            <h1 className="text-[22px] font-regular text-white">{props.review}</h1>
        </div>
        <div className="flex flex-col justify-end">
            <h1 className="font-bold text-xl text-white justify-end">{props.reviewer}</h1>
            <h2 className="font-medium text-lg text-white">{props.Designation}</h2>
        </div>
    </motion.div>
  )
}

export default TestimonialCard