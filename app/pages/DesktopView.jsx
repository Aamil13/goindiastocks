"use client"
import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import DisscussionFourm from '../components/discussionFourm/DisscussionFourm'
import MarketStories from '../components/marketStories/MarketStories'

const DesktopView = () => {
  const [sidebarOpen, setSidebarOpen]= useState(false)
  return (
    <div className='DesktopViewContainer h-screen'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />
      <DisscussionFourm sidebarOpen={sidebarOpen}/>
      <MarketStories/>
    </div>
  )
}

export default DesktopView