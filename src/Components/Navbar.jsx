import Logo from "../Images/Logo.svg"
import Menu from "../Images/MenuIcon.svg"
import { Popover } from 'react-tiny-popover'
import { useState } from "react"
const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <div className="flex flex-row items-center justify-between px-[20px] lg:px-[40px] py-[14px]">
        <img src={Logo} alt="Bemaark"  className="w-20 lg:w-24"/>
        <div className="flex flex-row items-center">
            <h1 className="lg:text-sm text-xs font-semibold">Menu</h1>
            <img src={Menu} alt="Navigation" className="lg:ml-4 ml-2 w-6 lg:w-10" />
        </div>
            {/* <Popover
  isOpen={isPopoverOpen}
  positions={['bottom', 'top', 'left', 'right']} // preferred positions by priority
  content={<div>Hi! Im popover content.</div>}
>
  <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
    Click me!
  </div>
</Popover>; */}
    </div>
  )
}

export default Navbar