import React from 'react'
import LogOut from '../../../public/img/LogOut.png'
export const UserCard = () => {
  return (
    <div className='w-full flex flex-row items-center justify-center bg-gray-300 border-t-1 border-b-1 p-3 pt-1 pb-1 border-gray-400 cursor-pointer'>
    <div className='w-1/4'><img className='ml-2 h-10 w-12 rounded-full bg-customBlue'/></div>
    <div className='w-3/4 flex flex-col justify-center'>
        <div className='w-full text-start font-rubik font-medium mt-4 text-medium'>Jesus Carrasco</div>
        <div className='w-full flex flex-row items-center '>
        <div className='w-1/3 text-start font-rubik text-small font-medium'>Status</div>
        <div className='w-1/3'></div>       
        <div className='w-1/3 text-start font-rubik text-small font-medium justify-center'>
        <button className='bg-slate-300 border-2 border-gray-400 rounded-md hover:bg-slate-400'>
        <img src={LogOut} className='p-1' />
      </button> 
      </div>
    </div>
    </div>

</div>
   )
}
