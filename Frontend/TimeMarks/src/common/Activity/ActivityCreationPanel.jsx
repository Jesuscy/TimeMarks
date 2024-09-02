import { Button, Divider, Input, RangeCalendar, Textarea } from '@nextui-org/react'
import React from 'react'

export const ActivityCreationPanel = () => {
  return (
    <div className='flex flex-col w-11/12 m-auto rounded-md bg-gray-100 border-2 border-gray-300 font-rubik'>
      <div className='w-full font-normal text-lg text-center m-2'>New Assignment:</div>
      <Divider />
      <div className='w-full flex flex-row m-2'>
        <div className='w-1/2 m-2'>
          <RangeCalendar
            aria-label="Date (Show Month and Year Picker)"
            showMonthAndYearPickers
          />
        </div>
        <Divider orientation='vertical' />
        <div className='w-1/2 flex flex-col m-4'>

          <div>
            <Textarea
              size="sm"
              label="Name"
              labelPlacement="inside"
              variant='bordered'
              maxRows={2}
              className="max-w-xs"
              
            />
          </div>

          <div className='mt-5'>
            <Textarea
              label="Description"
              labelPlacement="inside"
              placeholder="Enter your description"
              variant='bordered'
              maxRows={10}
              className="max-w-lg"
              
            />
          </div>

          <div className='w-full flex flex-row m-auto'>
            <div className="w-1/2 m-auto justify-center">
            <Button radius="full">
              Add
            </Button>
            </div>
         
            <div className="w-1/2 m-auto justify-center">
            <Button radius="full" color='danger'>
              Cancel
            </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
