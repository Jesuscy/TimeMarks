import React from 'react'
import { ActivitySmCard } from './ActivitySmCard'
import { Divider } from '@nextui-org/react'

export const ActivityList = () => {
  return (

    <div className='w-4/5 mt-20 p-2 rounded-md bg-gray-200 border-1 border-gray-300'>
      <div className='w-full ml-4 text-start font-rubik font-medium'>
      Activies:
      </div>
      <Divider className='w-3/4 ml-3'/>
      <ActivitySmCard/>
    </div>
  )
}

