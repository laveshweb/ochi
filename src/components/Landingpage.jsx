import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import LandingPage from '../assets/images/LandingPage.jpg'


const Landingpage = () => {
  return (
    <div className="w-full h-screen ">
        <div className="Text-Structure mt-20 px-3 sm:px-7 lg:px-18">
            <div className="masker  text-[40px]  min-[440px]:text-[50px] sm:text-[60px] md:text-8xl  font-['Founders_Grotesk_X-Cond_Bold'] ">
                <h1 className='uppercase font-sans font-bold  leading-none tracking-tighter relative top-1  lg:h-[100px] scale-y-[1.30]'>We Create</h1>
                <div className='relative left-0 sm:left-2 flex'>
                  <img src={LandingPage} alt="" className=' 
 w-[90px]  min-w-[400px]:w-[30px] min-w-[400px]:h-[20px]  sm:w-[110px]    md:w-[130px] lg:w-[160px] h-auto relative top-[2px] sm:top-2 lg:top-0 lg:mt-3 p-1  rounded-xl' />
                <h1 className='uppercase font-sans font-bold  -leading-[5vw] tracking-tighter lg:h-[100px] scale-y-[1.30]'>Eye-Opening</h1>
                </div>
                <h1 className='uppercase font-sans font-bold -leading-[2vw] tracking-tighter relative -top-4   min-[765px]:top-0 lg:h-[100px]  scale-y-[1.30]'>Presentations</h1>
            </div>
        </div>
            <div className="border-t-2 border-zinc-800 mt-40 sm:mt-30 flex justify-between  items-center flex flex-col min-[800px]:flex-row ">
              {
                ["for public and private companies", "from the first pitch to the pitch IPO"].map((item , index)=>
                  <p className='text-md font-light tracking-tight leading-none px-6 font-normal p-4 sm:p-5 '>{item}</p>
              )
              }
              <div className="Startup flex  gap-3 p-4 sm:p-5">
                <div className='px-3 py-2 border-1 border-zinc-700 font-normal  text-sm rounded-full mr-5 mt-[4px] '>Start The Project</div>
                <div className=' rounded-full  mt-1 relative right-6  '><FaArrowRight className='w-10 h-10 border-[1.5px] rounded-full p-[10px] rotate-[-45deg]' /></div>
              </div>
            </div>
    </div>
  )
}

export default Landingpage