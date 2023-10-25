import Logo from "../Images/Logo.svg"
import Menu from "../Images/MenuIcon.svg"
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-[40px] py-[14px]">
        <img src={Logo} alt="Bemaark"  className="w-24"/>
        <div className="flex flex-row items-center">
            <h1 className="text-sm font-semibold">Menu</h1>
            <img src={Menu} alt="Navigation" className="ml-4" />
        </div>
    </div>
  )
}

export default Navbar