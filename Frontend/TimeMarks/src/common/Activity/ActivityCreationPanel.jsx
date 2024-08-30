import { Divider, Input, RangeCalendar } from '@nextui-org/react'
import React from 'react'

export const ActivityCreationPanel = () => {
  return (
    <div className='flex flex-col w-full m-auto rounded-md bg-gray-100 border-2 border-gray-300 font-rubik'>
      <div className='w-full font-semibold text-start m-2'>New Assignment:</div>
      <Divider />
      <div className='w-full flex flex-row m-2'>
        <div className='w-1/2'>
          <RangeCalendar
            aria-label="Date (Show Month and Year Picker)"
            showMonthAndYearPickers
          />
        </div>
        <div className='w-1/2'>
        </div>
      </div>
    </div>
  )
}
