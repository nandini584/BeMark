import Footer from "../Components/LandingPage/Footer"
import Portfolios from "../Components/LandingPage/Portfolios"
import Scroll from "../Components/LandingPage/Scroll"
import Navbar from "../Components/Navbar"
import Culturepg from "../Components/Culture/Culture"
import ParallaxImg from "../Components/Culture/ParallaxImg"
import Mesh from "../Components/Culture/Mesh"
import Statement from "../Components/Culture/Statement"
import Numbers from "../Components/Culture/Numbers"
import PortfolioMain from "../Components/Culture/PortfolioMain"
const Culture = () => {
  return (
    <div>
      <Navbar/>
      <Culturepg/>
      <ParallaxImg/>
      <Mesh/>
      <Statement/>
      <Scroll/>
      <Numbers/>
      <PortfolioMain/>
      <Portfolios/>
      <Footer/>
    </div>
  )
}

export default Culture