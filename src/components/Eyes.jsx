import React, { useEffect, useState } from 'react'
import bg from '../assets/images/greenbackground.jpg'

function Eyes() {
    const [rotate , setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove" , (e)=> {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            var angle = Math.atan2(deltaY , deltaX) * ( 180/Math.PI)
            setRotate(angle-180)


        })
    })
    return (
        <div className='eyes w-full h-screen relative bg-red-400 overflow-hidden'>
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", }}
                className="w-full h-full ">
                <div className="absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  gap-20">
                    <div className="flex justify-center items-center w-[22vw] h-[22vw] rounded-full bg-white" >
                        <div className="relative  w-[68%] h-[68%] rounded-full bg-black">
                            <div  style={{transform : `rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10   ">
                            <div className="w-12 h-12 rounded-full bg-white">
                            </div>


                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center  w-[22vw] h-[22w] rounded-full bg-white">
                    <div className=" relative w-[68%] h-[68%] rounded-full bg-black">
                    <div style={{transform : ` rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10   ">
                            <div className="w-12 h-12 rounded-full bg-white">
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Eyes