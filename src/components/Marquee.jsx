import { animate, motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl  rounded-tr-3xl bg-[#004D43] -mb-[30px] ">
        <div className="text border-t-2 border-b-2  border-zinc-300 flex whitespace-nowrap  text-[40vw] sm:text-[34vw] 
        md:text-[24vw] md:text-[16vw]  lg:text-[16vw] uppercase text-white leading-none 
          font-['Founders_Grotesk_X-Cond_Bold'] font-sans font-bold gap-10 overflow-hidden -translate-y-1 ">
            <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease : "linear" , repeat : Infinity, duration : 5}}>We are Ochi</motion.h1>
            <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease : "linear" , repeat : Infinity, duration : 5}}>We are Ochi</motion.h1>
            <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease : "linear" , repeat : Infinity, duration : 5}}>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee