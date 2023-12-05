import Footer from "../Components/LandingPage/Footer"
import Portfolios from "../Components/LandingPage/Portfolios"
import Scroll from "../Components/LandingPage/Scroll"
import Navbar from "../Components/Navbar"
import Culturepg from "../Components/Culture/Culture"
const Culture = () => {
  return (
    <div>
      <Navbar/>
      <Culturepg/>
      <Scroll/>
      <Portfolios/>
      <Footer/>
    </div>
  )
}

export default Culture