import React from 'react'

export const ActivitySmCard = () => {
  return (
    
    <div className='w-6/6 flex flex-row items-center justify-center rounded-xl m-3 p-1 bg-gray-300 border-2 border-gray-400 cursor-pointer hover:bg-gray-400  hover:border-gray-500'>
        <div className='w-1/4'><img className='ml-2 h-10 w-12 rounded-full bg-customBlue'/></div>
        <div className='w-3/4 flex flex-col justify-center'>
            <div className='w-full text-center font-rubik font-medium'>Activity Name</div>
            <div className='w-full text-center font-rubik'>Activity Desc</div>

    </div>


    </div>  )
}
