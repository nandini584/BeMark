import Navbar from "../Components/Navbar"
import Expertisesection from "../Components/Expertise/Expertise"
import Letscollab from "../Components/Expertise/Letscollab"
import Footer from "../Components/LandingPage/Footer"
import Video from "../Components/Expertise/Video"
import ExpertServices from "../Components/Expertise/ExpertServices"
import ClientLogo from "../Components/LandingPage/ClientLogo"
import Cards from "../Components/Expertise/Cards"
import Background from "../Components/Expertise/Background"
import Scroll from "../Components/LandingPage/Scroll"
const Expertise = () => {
  return (
    <div>
      <Navbar/>
      <Expertisesection/>
      <Video/>
      <ExpertServices num={0}/>
      <Cards/>
      <ClientLogo/>
      <Scroll/>
      <Background/>
      <Footer/>
    </div>
  )
}

export default Expertise