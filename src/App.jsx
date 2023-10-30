import LandingPage from "./Pages/LandingPage"
import LoaderScreen from "./Pages/LoaderScreen"
import Portfolio from "./Pages/Portfolio"
import Expertise from "./Pages/Expertise"
import Culture from "./Pages/Culture"
import Feed from "./Pages/Feed"
import Connect from "./Pages/Connect"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/loader' element={<LoaderScreen/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/expertise' element={<Expertise/>}></Route>
      <Route path='/culture' element={<Culture/>}></Route>
      <Route path='/feed' element={<Feed/>}></Route>
      <Route path='/connect' element={<Connect/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App