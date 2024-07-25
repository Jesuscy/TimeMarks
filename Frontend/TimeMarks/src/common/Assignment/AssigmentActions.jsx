import React from 'react'
import add from '../../../public/img/add.png'
import del from '../../../public/img/delete.png'
import settings from '../../../public/img/settings.png'

export const AssigmentActions = () => {
  return (
    <div className='w-1/3 flex flex-row mr-10 '>
        <div className='w-1/3'>
        <button className='bg-slate-300 border-2 border-gray-400 m-2 p-1 rounded-md hover:bg-slate-400'>
            <img src={add}/>
        </button>
        </div>
        <div className='w-1/3'>
        <button className='bg-slate-300 border-2 border-gray-400 m-2 p-1 rounded-md hover:bg-slate-400'>
        <img src={del}/>

        </button>
        </div>
        <div className='w-1/3'>       
        <button className='bg-slate-300 border-2 border-gray-400 m-2 p-1 rounded-md hover:bg-slate-400'>
        <img src={settings}/>

        </button>
        </div>


    </div>
  )
}
