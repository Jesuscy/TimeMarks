import React from 'react'
import { ActivityList } from '../common/ActivityList'
import { Divider } from '@nextui-org/react'
import { ActivityActions } from '../common/ActivityActions'

export const UserPanel = () => {
  return (
    <div className='w-11/12 flex items-center flex-col pt-10 pb-10 mt-10 border-2 border-gray-300 rounded-xl bg-gray-100'>
        <ActivityActions/>
        <ActivityList/>

    </div>
  )
}
