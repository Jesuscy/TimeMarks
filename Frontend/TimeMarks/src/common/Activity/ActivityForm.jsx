import React from 'react'
import { ActivityCard } from './ActivityCard'
import { Activity } from './Activity'

export const ActivityForm = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col pt-10 pb-10 mt-10 border-2 border-gray-300 rounded-xl bg-gray-100'>
      <Activity/>
    </div>
  )
}
