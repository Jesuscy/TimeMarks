import React from 'react'
import '../index.css'
import { Header } from './Header'
import { UserPanel } from './UserPanel'
import { ActivityList } from '../common/ActivityList'
import { Activity } from '../common/Activity'
import { Divider } from '@nextui-org/react'
import { ActivityForm } from '../common/ActivityForm'
export const Home = () => {
  return (
    <>
      
        <div className='w-full flex flex-row'>
        <div className='w-1/4'>
        <UserPanel/>
        </div>
        <div className='w-2/4'>
        <ActivityForm/>
        </div>
        <div className='w-1/4 flex justify-end'>
        <UserPanel/>

        </div>
        </div>
    </>
  )
}
