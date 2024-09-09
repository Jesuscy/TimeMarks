import { Divider } from '@nextui-org/react'
import React, { useContext } from 'react'
import { AssignmentContext } from '../Activity/ActivityForm'

export const AssignmentCard = () => {
  const { selectedAssignment,setSelectedAssignment } = useContext(AssignmentContext)
  return (
    <div className='w-full flex flex-row mt-2 mb-2 bg-gray-100 border-2 border-gray-300 rounded-lg hover:bg-gray-200' onClick={()=>setSelectedAssignment('Holas')}>
    <div className='w-3/12 flex flex-col border-r-2 border-r-gray-300'>
        <div className='m-2 text-sm'>{selectedAssignment}</div>
        <div className='m-2 text-sm'>12:00</div>
    </div>    
    <div className='w-9/12 flex flex-col m-auto p-2 font-medium'>AssignmentCard
        <div className='w-full text-center font-normal text-sm'>Assignment Desc</div>

    </div>
    </div>
  )
}
