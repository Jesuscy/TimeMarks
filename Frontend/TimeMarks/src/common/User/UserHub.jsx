import { Divider } from '@nextui-org/react'
import React from 'react'
import { UserInfo } from './UserInfo'
import { UserCard } from './UserCard'

export const UserHub = () => {
  return (
    <div className='w-full mt-72 bg-gray-200'>
        <Divider/>
        <UserInfo/>
        <Divider/>
        <UserCard/>
        <Divider/>

    </div>
  )
}
