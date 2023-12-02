import HeroSection from "../Components/LandingPage/HeroSection"
import Navbar from "../Components/Navbar"
import Services from "../Components/LandingPage/Services"
import LogoPoint from "../Images/LogoPoint.svg"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProjectSummary from "../Components/LandingPage/ProjectSummary"
import TestimonialsSummary from "../Components/LandingPage/TestimonialsSummary"
import Liner from "../Components/LandingPage/Liner"
import Testimonials from "../Components/LandingPage/Testimonials"
import Expertise from "../Components/LandingPage/Expertise"
import Mesh from "../Components/LandingPage/Mesh"
import Footer from "../Components/LandingPage/Footer"
import PlayBoard from "../Components/LandingPage/PlayBoard"
import ServicesExpand from "../Components/LandingPage/ServicesExpand"
import Portfolios from "../Components/LandingPage/Portfolios"
import Video from "../Components/LandingPage/Video"
import ClientLogo from "../Components/LandingPage/ClientLogo"
import Bemaarkculture from "../Components/LandingPage/Bemaarkculture"
import Parallax from "../Components/LandingPage/ParallaxScroll/Parallax"
import Canvas from "../Components/LandingPage/Canvas"
const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <div className="bg-[#1D0B3A]">  
      <motion.div
      initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.95 }}
    exit={{ opacity: 1 }}
    className="absolute top-0 left-0 w-full h-full "
  >
      {/* <motion.div
        style={{
          position: "fixed",
          top: mousePosition.y-15,
          left: mousePosition.x-10,
        }}
      >
        <img src={LogoPoint} alt="Bemaark" className="z-50"/>
      </motion.div> */}
      <Navbar />
      <HeroSection />
      {/* <div className="md:hidden block">
      </div> */}
      <div className="hidden md:block">

      <Services/>
      </div>
      <Video/>

      {/* <div className="hidden md:block">
      <Parallax/>
      </div> */}
      <ProjectSummary/>
      <Portfolios/>
      <TestimonialsSummary/>
      <Testimonials/>
      <ClientLogo/>
      {/* <Liner /> */}
      <ServicesExpand/>
      <Expertise/>
      <PlayBoard/>
      <div className="block md:hidden">

      <Bemaarkculture/>
      </div>
      <div className="hidden md:block">

      <Canvas/>
      </div>
      <Mesh/>
      <Footer/>
    </motion.div>
    
    </div>
  )
}

export default LandingPage
