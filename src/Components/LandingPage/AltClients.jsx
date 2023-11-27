import React from 'react'
import Logo1 from "../../Images/Client logo/Logo-11 1.svg"
import Logo2 from "../../Images/Client logo/Logo-12 1.svg"
import Logo3 from "../../Images/Client logo/Logo-13 1.svg"
import Logo4 from "../../Images/Client logo/Logo-14 1.svg"
import Logo5 from "../../Images/Client logo/Logo-15 1.svg"
import Logo6 from "../../Images/Client logo/Logo-16 1.svg"
import Logo7 from "../../Images/Client logo/Logo-17 1.svg"
import Logo8 from "../../Images/Client logo/Logo-18 1.svg"
import Logo9 from "../../Images/Client logo/Logo-19 1.svg"
import Logo10 from "../../Images/Client logo/Logo-20 1.svg"
export const AltClients = () => {
  return (
    <div className='my-12'>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-evenly mb-4">
          <img src={Logo1} alt="client_logos" className="w-[100px]"/>
          <img src={Logo2} alt="client_logos" className="w-[100px]"/>
          <img src={Logo3} alt="client_logos" className="w-[100px]"/>
          </div>
          <div className="flex flex-row items-center justify-evenly mb-4">
          <img src={Logo4} alt="client_logos" className="w-[120px]"/>
          <img src={Logo5} alt="client_logos" className="w-[120px]"/>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-evenly mb-4">
          <img src={Logo6} alt="client_logos" className="w-[100px]"/>
          <img src={Logo7} alt="client_logos" className="w-[100px]"/>
          <img src={Logo8} alt="client_logos" className="w-[100px]"/>
          </div>
          <div className="flex flex-row items-center justify-evenly mb-4">
          <img src={Logo9} alt="client_logos" className="w-[120px]"/>
          <img src={Logo10} alt="client_logos" className="w-[120px]"/>
          </div>
        </div>
    </div>
  )
}
