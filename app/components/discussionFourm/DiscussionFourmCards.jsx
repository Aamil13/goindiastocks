import React from 'react'
import { FaRegHeart, } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";

const DiscussionFourmCards = ({data}) => {
  return (
    <div className='w-4/5 max-sm:w-11/12 min-w-[360px] shadow-lg flex justify-between p-2'>
      <p className='p-2 '>{data.icon}</p>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold flex items-center gap-3'>{data.name} <span className='bg-blue-700 py-[2px] px-2 rounded-2xl text-white text-xs font-normal'>{data.sector}</span></p>
        <p className='text-gray-700'>{data.dummytext}</p>
        <div className='flex justify-between max-w-[90%] max-sm:max-w-full'>
          <p className='flex items-center gap-2'><FaRegHeart/><span className='text-sm max-sm:text-xs font-bold'> {data.likes}</span></p>
          <p className='flex items-center gap-2'><MdOutlineRemoveRedEye size={20}/><span className='text-sm max-sm:text-xs font-bold'> {data.views}</span></p>
          <p className='flex items-center gap-2'><LuMessageSquare/><span className='text-sm max-sm:text-xs font-bold'> {data.comments} Comments</span></p>
          <p className='flex items-center gap-2'><FiShare2/><span className='text-sm max-sm:text-xs font-bold'> share</span></p>
        </div>
      </div>
      <p className='min-w-20 max-sm:min-w-10 text-blue-500 text-sm max-sm:text-[8px] font-semibold'>{data.time} min ago</p>
    </div>
  )
}

export default DiscussionFourmCards