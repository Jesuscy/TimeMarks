import React, { useEffect, useState } from 'react'
import { ActivityCard } from './ActivityCard'
import { Activity } from './Activity'
import { AssignmentDetail } from '../Assignment/AssignmentDetail'
import { ActivityCreationPanel } from './ActivityCreationPanel'
import { Divider } from '@nextui-org/react'

export const ActivityForm = () => {

  const [showCreationPanel, setShowCreationPanel] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState({})
  const showPanel = () =>{setShowCreationPanel(true)}
  const quitPanel = () =>{setShowCreationPanel(false)}
  return (
    <div className='w-full h-full flex flex-col pt-10 pb-10 mt-10 border-2 border-gray-300 rounded-xl bg-gray-100'>
      <Activity setShowCreationPanel={showPanel} setSelectedAssignment={setSelectedAssignment} />
      <Divider />
      {showCreationPanel ? (<ActivityCreationPanel setShowCreationPanel={quitPanel}/>) : (<AssignmentDetail />)}
    </div>
  )
}
