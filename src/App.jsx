import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-[#f1f1f1]  '>
      <Navbar/>
      <Landingpage/>  
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      
      </div>
  )
}

export default App