import LandingPage from "./Pages/LandingPage"
import LoaderScreen from "./Pages/LoaderScreen"
import Portfolio from "./Pages/Portfolio"
import Expertise from "./Pages/Expertise"
import Culture from "./Pages/Culture"
import Feed from "./Pages/Feed"
import Connect from "./Pages/Connect"
import { Routes, Route, useLocation } from "react-router-dom"
import {useState, useEffect} from "react"
import Portfolioitem from "./Pages/Portfolioitem"
const App = () => {
  const location = useLocation();
  const [loading, setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <>
    {
      loading?
      <LoaderScreen/> : 
      ( 
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
          <Routes location={location}>

          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/portfolio/item" element={<Portfolioitem />} />
        </Routes>
         </div>
      )
    }
    </>
  );
};

export default App