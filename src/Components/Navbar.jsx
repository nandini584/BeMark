import Logo from "../Images/Logo.svg"
import Menu from "../Images/MenuIcon.svg"
import { Popover } from 'react-tiny-popover'
import { useState } from "react"
const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <div className="flex flex-row items-center justify-between px-[40px] py-[14px]">
        <img src={Logo} alt="Bemaark"  className="w-24"/>
        <div className="flex flex-row items-center">
            <h1 className="text-sm font-semibold">Menu</h1>
            <img src={Menu} alt="Navigation" className="ml-4" />
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