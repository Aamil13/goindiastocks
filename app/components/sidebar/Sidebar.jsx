"use client"
import React, { useEffect, useState } from 'react'
import { FaUser,FaBell } from "react-icons/fa6";
import { BiSolidMessageDetail,BiSolidDollarCircle  } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

const Sidebar = ({sidebarOpen,setSidebarOpen}) => {
  const [screenSize,setScreenSize] = useState("")
  
  // console.log(screenSize);
  useEffect(()=>{
    const handleResize = ()=>{
      setScreenSize(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  },[])
  const handleClick=()=>{
    
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <div  className='fixed flex h-full items-center '>
        
          <div className={`${sidebarOpen ? "w-72" : "w-0"} overflow-hidden transition-all h-full bg-blue-950 text-white `}>
            <div className='flex justify-between p-4 border-b-2 border-gray-400'>
              <p className='flex gap-2 items-center'><span><FaUser size={24} /></span> Hello, User</p>
              <p><FaBell size={24} /></p>
            </div>
            {/* //Categories */}
            <div className='list-none flex flex-col gap-4 py-4 px-10 pr-0 font-normal text-lg'>
              <li className='relative cursor-pointer'><span className='absolute -left-6 bottom-1'><BiSolidMessageDetail /></span>Disscussion Fourm</li>
              <li className='relative cursor-pointer'><span className='absolute -left-6 bottom-1'><BiSolidDollarCircle /></span>Market Stories</li>
              <li className='cursor-pointer'>Sentiment</li>
              <li className='cursor-pointer'>Market</li>
              <li className='cursor-pointer'>Sector</li>
              <li className='cursor-pointer'>Watchlist</li>
              <li className='cursor-pointer'>Events</li>
              <li className='cursor-pointer'>News/interview</li>
            </div>
        </div>
          <div onClick={()=>handleClick()} className='bg-blue-950 h-24 w-4 flex items-center relative'>
          <span className='absolute -left-1'><IoMdArrowDropright size={28} color='white'/></span>
          </div>
      </div>
  )
}

export default Sidebar