import { disscussionData } from '@/app/RawData/data'
import React from 'react'
import DiscussionFourmCards from './DiscussionFourmCards'

const DisscussionFourm = ({sidebarOpen}) => {
  return (
    <div className={`${sidebarOpen && "ps-72"} w-11/12 max-sm:w-full flex flex-col transition-all`}>
       <p className='bg-gray-200 px-2 w-fit m-2 text-2xl font-medium text-red-500 max-sm:hidden'>Disscussion Fourm</p>
        <div className='flex flex-col gap-12 max-sm:items-center max-sm:mt-10'>
       {
        disscussionData?.map((item,key)=>(
            <DiscussionFourmCards key={key} data={item} />
        ))
       }
       </div>
        </div>
  )
}

export default DisscussionFourm