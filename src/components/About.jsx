import React from 'react'
import BackGround from '../assets/images/background.jpg'


function About() {
  return (
    <div className="w-full py-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl font-['NEUE_MONTREAL'] ">
      <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl  lg:leading-[4.5vw] px-4 sm:px-6 md:px-8 lg:px-10'>We craft category-defining presentations, brand identities, and digital experiences 
        that drive funding, 
        sales, and market leadership.</h1>
        <div className="w-full border-t-[1px] border-violet-950 mt-8 w-full"></div>
        <div className="flex w-full">
  {/* LEFT SIDE */}
  <div className="w-1/2 gap-10">
    <h1 className="text-6xl px-10 mt-8">
      How we can Help:
    </h1>

    <div className="w-[17vw] px-7 py-4 ml-8 bg-zinc-900 rounded-full text-white text-[23px] relative mt-4 flex items-center uppercase font-semibold">
      Read More
      <div className="ml-7 text-7xl -mt-[42px]">.</div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  
  <img src={BackGround} alt="" className='rounded-3xl  h-[80vh] bg-red-600 mt-10 mr-10 rounded-3xl' />
 
</div>
    </div>
  )
}

export default About