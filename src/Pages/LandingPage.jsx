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
    <div>
      <motion.div
        style={{
          position: "fixed",
          top: mousePosition.y-15,
          left: mousePosition.x-10
        }}
      >
        <img src={LogoPoint} alt="Bemaark" />
      </motion.div>
      <Navbar />
      <HeroSection />
      <Services />
      <ProjectSummary/>
      <TestimonialsSummary/>
      <Testimonials/>
      <Liner />
      <Expertise/>
      <Mesh/>
      <Footer/>
    </div>
  )
}

export default LandingPage
