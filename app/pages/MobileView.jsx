"use client"
import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import DisscussionFourm from '../components/discussionFourm/DisscussionFourm'
import MarketStories from '../components/marketStories/MarketStories'

const MobileView = () => {
  const [sidebarOpen, setSidebarOpen]= useState(false)
  const [activeTab, setActiveTab] = useState("Disscussion fourm")
  return (
    <>
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />

    <div className='flex justify-between '>
      <div onClick={(e)=>setActiveTab(e.target.innerText)} className={`${activeTab == "Disscussion fourm" ? "bg-blue-950 border-b-4 border-red-700" : "bg-blue-900" }  p-4 w-1/2 text-white text-lg text-center `}>Disscussion fourm</div>
      <div onClick={(e)=>setActiveTab(e.target.innerText)} className={`${activeTab == "Market Stories" ? "bg-blue-950 border-b-4 border-red-700" : "bg-blue-900" }  p-4 w-1/2 text-white text-lg text-center `}>Market Stories</div>
    </div>
    
    {
      activeTab == "Disscussion fourm" ? 
      <DisscussionFourm/>
      :
      <MarketStories/>
    }
   
    </>
  )
}

export default MobileView