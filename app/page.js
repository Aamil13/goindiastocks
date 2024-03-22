import React from 'react'
import MobileView from './pages/MobileView'
import DesktopView from './pages/DesktopView'


const Main = () => {
 
  return (
    <>
    <div className='sm:hidden'>
    <MobileView/>   
    </div>
    
    <div className='max-sm:hidden h-screen'>
    <DesktopView/>
    </div>
    </>
  )
}

export default Main