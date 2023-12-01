import Footer from "../Components/LandingPage/Footer"
import Navbar from "../Components/Navbar"
import Demo from "../Components/Portfolio/Demo"
import Showcase from "../Components/Portfolio/Showcase"
import Approach from "../Components/Portfolio/Approach"
import Projects from "../Components/Portfolio/Projects"
import ClientLogo from "../Components/LandingPage/ClientLogo"
import Dribbble from "../Components/Portfolio/Dribbble"
const Portfolio = () => {
  return (
    <div className="">
      <Navbar/>
      <Showcase/>
      <Demo/>
      <Approach/>
      <Projects/>
      <ClientLogo/>
      <Dribbble/>
      <Footer/>
    </div>
  )
}

export default Portfolio