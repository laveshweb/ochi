import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className='w-full h-screen bg-[#f1f1f1]  '>
      <Navbar/>
      <Landingpage/>  
      <Marquee/>
      </div>
  )
}

export default App