import React from 'react'
import Logo from '../assets/images/logo.png'
import {Menu , Phone} from 'lucide-react'

function Navbar() {
  return (
    <div className='w-full px-5 min-[700px]:px-25 py-[20px] font-["Founders_Grotesk"]  flex justify-between items-center  '>
      <div className="Logo ">
        <img src={Logo} alt="logo" className=' h-[30px] sm:mt-1' />
      </div>
      <div className="Links flex gap-10 mr-[20px] mt-2 ">
        {["Sevices", "Our Works", "About us", "Insights", "Contact us"].map((item , index) => (
          <a href="" className={`text-md  font-sans  text-[17px]  hidden min-[900px]:block ${index === 4 && " sm:ml-[50px]  lg:ml-[180px]"}`}>{item}</a>
        ))}
        <div className="min-[900px]:hidden -mr-10 "> 
          <Menu className="size-6 text-zinc-900  cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar 