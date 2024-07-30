import { Divider } from '@nextui-org/react'
import React from 'react'
import { ActivityUserCard } from './ActivityUserCard'
import { UserCard } from '../User/UserCard'

export const ActivityUsersList = () => {
  return (
    <div className='w-5/6 mt-16 p-2 rounded-md bg-gray-200 border-1 border-gray-300'>
        
    <div className='w-full ml-4 text-start font-rubik font-medium'>
      Users:
      </div>
      <Divider className='w-3/4 ml-3'/>
      <ActivityUserCard/>
      <ActivityUserCard/>


    </div>
  )
}
