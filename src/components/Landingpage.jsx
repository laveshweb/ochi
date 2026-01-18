import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import LandingPage from '../assets/images/landingpage.jpg'


const Landingpage = () => {
  return (
    <div className="w-full ">
        <div className="Text-Structure mt-20 px-3 sm:px-7 lg:px-18">
            <div className="masker max-[400px]:text-[32px]  text-[40px]  min-[440px]:text-[50px] sm:text-[60px] md:text-8xl  font-['Founders_Grotesk_X-Cond_Bold'] ">
                <h1 className='uppercase font-sans font-bold  leading-none tracking-tighter relative top-1  lg:h-[100px] scale-y-[1.30] '>We Create</h1>
                <div className='relative left-0 sm:left-2 flex'>
                  <img src={LandingPage} alt="" className='w-[80px] max-[400px]:h-[48px] max-[440px]:h-[55px]  sm:w-[110px] sm:h-auto  md:w-[130px] lg:w-[160px]  relative -bottom-[0.5px] min-[400px]:top-1 lg:top-0 lg:mt-3 p-1  rounded-xl ' />
                <h1 className='uppercase font-sans font-bold  -leading-[5vw] tracking-tighter lg:h-[100px] scale-y-[1.30]'>Eye-Opening</h1>
                </div>
                <h1 className='uppercase font-sans font-bold -leading-[2vw] tracking-tighter relative -top-4   min-[765px]:top-0 lg:h-[100px]  scale-y-[1.30] max-[400px]:mt-[5px]'>Presentations</h1>
            </div>
        </div>
            <div className="border-t-2 border-zinc-800 mt-28   flex justify-between  items-center flex flex-col min-[800px]:flex-row ">
              {
                ["for public and private companies", "from the first pitch to the pitch IPO"].map((item , index)=>
                  <p className='text-md font-light tracking-tight leading-none px-6 font-normal p-4 sm:p-5'>{item}</p>
              )
              }
              <div className="Startup flex  gap-3 p-4 sm:p-5">
                <div className='px-3  border-1 border-zinc-700 font-normal   leading-none  translate text-sm rounded-full mr-5 flex justify-center items-center '>Start The Project</div>
                <div className=' rounded-full  mt-1 relative right-6  '><FaArrowRight className='w-10 h-10 border-[1.5px] rounded-full p-[10px] rotate-[-45deg]' /></div>
              </div>
            </div>
    </div>
  )
}

export default Landingpage