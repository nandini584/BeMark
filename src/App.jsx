import LandingPage from "./Pages/LandingPage"
import LoaderScreen from "./Pages/LoaderScreen"
import Portfolio from "./Pages/Portfolio"
import Expertise from "./Pages/Expertise"
import Culture from "./Pages/Culture"
import Feed from "./Pages/Feed"
import Connect from "./Pages/Connect"
import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/loader"
            element={<LoaderScreen />}
            exit={{ scaleY: 0 }} 
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App