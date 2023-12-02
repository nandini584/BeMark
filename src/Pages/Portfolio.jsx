import Footer from "../Components/LandingPage/Footer"
import Navbar from "../Components/Navbar"
import Demo from "../Components/Portfolio/Demo"
import Showcase from "../Components/Portfolio/Showcase"
import Approach from "../Components/Portfolio/Approach"
import Projects from "../Components/Portfolio/Projects"
import ClientLogo from "../Components/LandingPage/ClientLogo"
import Dribbble from "../Components/Portfolio/Dribbble"
import {motion} from 'framer-motion'
const Portfolio = () => {
  return (
    <div className="bg-[#1D0B3A]">  
      <motion.div
      initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.95 }}
    exit={{ opacity: 1 }}
    className="absolute top-0 left-0 w-full h-full ">
      <Navbar/>
      <Showcase/>
      <Demo/>
      <Approach/>
      <Projects/>
      <ClientLogo/>
      <Dribbble/>
      <Footer/>
    </motion.div>
    </div>
  )
}

export default Portfolio