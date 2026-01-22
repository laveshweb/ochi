import React, { useState } from 'react'
import Image1 from '../assets/images/image1.png'
import Image2 from '../assets/images/image2.png'
import { motion, useAnimation } from 'framer-motion'


function Featured() {
  const cards = [useAnimation(), useAnimation()]

  const HandleHover = (index)=>{
cards[index].start({y : "0"})
  }

  const HandleHoverEnd = (index)=>{
    cards[index].start({y : "100%"})
      }
    
  return (
    <div className="w-ful py-14">
      <div className="w-full px-3 sm:px-7 md:px-10 border-b-2 border-zinc-400 pb-10">
        <h1 className=' max-[330px]:text-3xl  text-4xl  sm:text-5xl md:text-6xl font-["NEUE_MONTREAL "] whitespace-nowrap font-sans tracking-tight'>Featured Projects</h1>
      </div>
      <div className="">
        <div className="cards w-full flex flex-col md:flex-row  gap-4 mt-10  px-1 sm:px-3 pmd:px-10">
          <div className="headings absolute bg-red-500"></div>

          <motion.div onHoverStart={()=>HandleHover(0)} onHoverEnd={()=> HandleHoverEnd(0)} className="cardContainer relative  w-full md:w-1/2 h-[78vh] bg-red-500 rounded-2xl ">
            <h1 className='absolute hidden lg:flex left-full -translate-x-1/2 top-1/2 overflow-hidden -translate-y-1/2 z-10 tracking-tight leading-none  font-semibold uppercase text-[#CDEA68] text-6xl lg:text-8xl whitespace-nowrap'>
              {"Salience Labs".split("").map((item, index) => (
                <motion.span initial={{y : "100%"}} animate={cards[0]}   transition={{ ease: [0.77, 0, 0.175, 1], delay: index * 0.05 }} className='inline-block '>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full bg-green-600 overflow-hidden rounded-2xl">
              <img src={Image1} className='w-full h-full object-cover object-center ' alt="" />
            </div>
          </motion.div>

          <motion.div  onHoverStart={()=>HandleHover(1)}   onHoverEnd={()=> HandleHoverEnd(1)} className="cardContainer relative w-full md:w-1/2 h-[78vh] bg-red-500  rounded-2xl">
            <h1 className='absolute  hidden lg:flex  overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 tracking-tight leading-none  text-[#CDEA68] uppercase  text-6xl lg:text-8xl rounded-2xl font-semibold  whitespace-nowrap '>
                    {"Medllia experience".split("").map((item, index) => (
               <motion.span initial={{y : "100%"}} animate={cards[1]}   transition={{ ease: [0.77, 0, 0.175, 1], delay: index * 0.05 }} className='inline-block'>
               {item}
             </motion.span>
              ))}
            </h1>
            <div className="w-full h-full bg-green-600 overflow-hidden rounded-2xl ">
              <img src={Image2} className='w-full h-full object-cover' alt="" />
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default Featured