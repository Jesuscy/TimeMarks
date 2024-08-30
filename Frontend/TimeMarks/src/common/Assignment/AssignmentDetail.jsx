import { Divider } from '@nextui-org/react'
import React from 'react'

export const AssignmentDetail = () => {
  return (
    
      <div className='flex flex-col w-3/4 m-auto font-rubik bg-slate-200 border-2 border-gray-400  p-1 rounded-md '>
        <div className='w-full text-start p-2 font-medium'>AssignmentTitle</div>
        <Divider/>
        <div className='w-full text-start p-2 font-normal'>Asignment Desc</div>
      </div>
  )
}
