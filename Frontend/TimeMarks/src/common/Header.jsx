import React from 'react'

export const Header = () => {
  return (
    <div className='w-full h-16 flex flex-row'>
      <div className='w-1/2 flex flex-row m-2 items-center'>
        <div className='w-1/4 text-2xl font-rubik text-black font-light'>
          <h1>TimeMarks</h1>
        </div>
        <div className='w-1/6 font-rubik text-black text-medium cursor-pointer hover:text-gray-700'>
          <p>Option 1</p>
        </div>
        <div className='w-1/6 font-rubik text-black text-medium cursor-pointer hover:text-gray-700'>
          <p>Option 2</p>
        </div>


      </div>
       <div className='w-1/2 flex flex-row m-2 items-center justify-center'>
        

      </div>

    </div>
  )
}
