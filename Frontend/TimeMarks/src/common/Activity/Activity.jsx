import React from 'react'
import {RangeCalendar} from "@nextui-org/calendar";
import { AssignmentCard } from '../Assignment/AssignmentCard';
import { ActivityActions } from './ActivityActions';
import { AssigmentActions } from '../Assignment/AssigmentActions';
import { Divider } from '@nextui-org/react';
import { AssignmentDetail } from '../Assignment/AssignmentDetail';
import { ActivityPanel } from './ActivityPanel';
import { ActivityCreationPanel } from './ActivityCreationPanel';

export const Activity = ({setShowCreationPanel, setSelectedAssignment}) => {
  

  return (
    <div className='w-full flex flex-col font-rubik'>
    <div className='w-full flex flex-row'>
      <div className='w-1/3 font-medium'>ActivityHeader</div>
    </div>
    <div className='w-full flex flex-row items-center'>
      <div className='w-1/2 m-5'> 
      <RangeCalendar 
      aria-label="Date (Show Month and Year Picker)" 
      showMonthAndYearPickers
      />
    </div>
    <div className='w-1/2 h-64 border-2 rounded-lg bg-white overflow-y-scroll m-5 p-2'> 
     <AssignmentCard />
     <AssignmentCard />
     <AssignmentCard />
     <AssignmentCard />
     <AssignmentCard />
     <AssignmentCard />
     <AssignmentCard />
    </div>
   
    </div>

    <div className='w-full flex flex-col justify-end'>
    <AssigmentActions setShowCreationPanel={setShowCreationPanel}/>
    </div>
   
    </div>
   
  )
}
