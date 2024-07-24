import React from 'react'
import add from '../../../public/img/add.png'
import del from '../../../public/img/delete.png'
import settings from '../../../public/img/settings.png'

export const ActivityActions = () => {
  return (
    <div className='w-5/6 flex flex-row items-center mt-2 rounded-xl bg-gray-300 font-rubik border-1 border-gray-400'>
      <div className='w-3/6 font-normal text-center'>
        Actions:
      </div>
      <div className='w-3/6 flex flex-row items-center font-rubik font-medium'>
      <button className='bg-slate-300 border-2 border-gray-400 m-2 rounded-md hover:bg-slate-400'>
        <img src={add}/>
      </button>
      <button className='bg-slate-300 border-2 border-gray-400 m-2 rounded-md hover:bg-slate-400'>
      <img src={del}/>
      </button>
      <button className='bg-slate-300 border-2 border-gray-400 m-2 rounded-md hover:bg-slate-400'>
      <img src={settings}/>
      </button>
      

      </div>
    </div> 
  )
}
