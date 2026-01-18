import React from 'react'
import BackGround from '../assets/images/background.jpg'


function About() {
  return (
    <div className="w-full min-[2255px]:h-full py-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl font-['NEUE_MONTREAL'] ">
      <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl  lg:leading-[4.5vw] px-4 sm:px-6 md:px-8 lg:px-10'>We craft category-defining presentations, brand identities, and digital experiences 
        that drive funding, 
        sales, and market leadership.</h1>
        <div className="w-full border-t-[1px] border-violet-950 mt-8 w-full"></div>

        <div className="flex flex-col lg:flex-row items-center justify-center  w-full ">
  {/* LEFT SIDE */}
  <div className="w-full lg:w-1/2  gap-4  ">
    <h1 className="text-3xl md:text-4xl ml-20 mt-10  whitespace-nowrap relative lg:right-80 ">
      How we can Help:
    </h1>

    <button className="flex items-center mt-4 mb-10 justify-between px-6 py-3 relative left-20 lg:-left-60   bg-zinc-900 text-white rounded-full uppercase font-semibold text-lg sm:text-base lg:text-lg w-fit min-w-[160px] cursor-pointer hover:scale-105 transition-transform duration-200">
      <span>Read More</span>
      <span className="ml-4 w-2.5 h-2.5 bg-white rounded-full"></span>
      </button>

  {/* RIGHT SIDE */}
  <div className="flex items-center justify-center">
  <img src={BackGround} alt="" className=' w-[90%]  h-full min-[2255px]:w-[60%]   rounded-3xl relative  min-[1800px]:top-[50px] min-[2255px]:top-[150px]  lg:left-70  lg:-mt-[20%]  ' />
  </div>
  </div>

 
</div>
    </div>
  )
}

export default About