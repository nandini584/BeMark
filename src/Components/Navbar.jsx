import Logo from "../Images/Logo.svg"
import Menu from "../Images/MenuIcon.svg"
import { useState } from "react"
import Menubar from "./Menubar"
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-row items-center bg-white justify-between px-[18px] lg:px-[40px] py-[14px]">
        <img src={Logo} alt="Bemaark"  className="w-20 lg:w-36"/>
        <div className="flex flex-row items-center">
            <h1 className="lg:text-sm text-xs font-semibold">Menu</h1>
            <div className="border-black border-2 rounded-full cursor-pointer z-10 relative overflow-hidden mr-4 md:ml-4 ml-2" onClick={()=>setShow(!show)}>
      <div className="circle" style={{ position: 'relative', width: '36px', height: '36px'}}>
        <MenuIcon style={{ color: 'black' }} className="icon z-100 hover:color-white" />
        <div className="fill bg-black"></div>
      </div>
    </div>
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