import Logo from "../Images/Logo.svg"
import Menu from "../Images/MenuIcon.svg"
import { useState } from "react"
import Menubar from "./Menubar"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-row items-center bg-white justify-between px-[20px] lg:px-[40px] py-[14px]">
        <img src={Logo} alt="Bemaark"  className="w-20 lg:w-24"/>
        <div className="flex flex-row items-center">
            <h1 className="lg:text-sm text-xs font-semibold">Menu</h1>
            <img src={Menu} alt="Navigation" className="lg:ml-4 ml-2 w-6 lg:w-10" onClick={()=>setShow(!show)}/>
        </div>
        {
          show?
          <div className="absolute top-2 right-8 z-100">
            <Menubar/>
          </div>: null
        }
    </div>
  )
}

export default Navbar