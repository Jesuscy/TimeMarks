import React from 'react'
import { ActivityUsersList } from '../ActivityUsers/ActivityUsersList'
import { ActivityActions } from './ActivityActions'
import { UserHub } from '../User/UserHub'

export const ActivityPanel = () => {
  return (
    <div className='w-11/12 h-full flex flex-col items-center pt-10 pb-10 mt-10 border-2 border-gray-300 rounded-xl bg-gray-100'>
    <div className='w-full font-normal font-rubik text-xl'>Activity Name</div>            
    <ActivityUsersList/>
    <UserHub/>
    </div>
  )
}
