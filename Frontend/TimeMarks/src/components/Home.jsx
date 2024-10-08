import React from 'react'
import '../index.css'
import { Header } from './Header'
import { UserPanel } from './UserPanel'
import { ActivityList } from '../common/Activity/ActivityList'
import { Activity } from '../common/Activity/Activity'
import { Divider } from '@nextui-org/react'
import { ActivityForm } from '../common/Activity/ActivityForm'
import { ActivityPanel } from '../common/Activity/ActivityPanel'
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
        <ActivityPanel/>

        </div>
        </div>
    </>
  )
}
