import { MarketData } from '@/app/RawData/data'
import React from 'react'
import MarketStoriesCard from './MarketStoriesCard'

const MarketStories = () => {
  return (
    <div className='w-[35%] max-sm:w-full flex flex-col'>
    <p className='max-sm:hidden bg-gray-200 px-2 w-fit m-2 text-xl font-medium text-red-500'>Market Stories</p>

    <div className='flex flex-col gap-10 max-sm:items-center max-sm:mt-10'>
      {MarketData?.map((item,key)=>(
        <MarketStoriesCard key={key} data={item} />
      ))}
    </div>
    </div>
  )
}

export default MarketStories