import React from 'react'

const MarketStoriesCard = ({data}) => {
  return (
    <div className='w-11/12 flex flex-col gap-2 border-x-2 pb-3'>
      <img className='' src={data.img.src} alt="" />
      <p className='px-2 text-lg font-semibold'>{data.title}</p>
      <p className='px-2 text-xs max-w-[90%] font-semibold text-gray-600'>{data.desc}</p>
    </div>
  )
}

export default MarketStoriesCard