import React from 'react'
import add from '../../../public/img/add.png'
import del from '../../../public/img/delete.png'
import settings from '../../../public/img/settings.png'

export const AssigmentActions = () => {
  return (
    <div className='w-full justify-end flex mr-10 mb-2 text-md'>
        <div className='w-1/3'>
        <button className='flex flex-row m-auto bg-slate-300 border-2 border-gray-400 p-1 rounded-md hover:bg-slate-400'>
        <img src={add}/>
        <p className='ml-2'>New</p> 
        </button>
        </div>
        <div className='w-1/3'>
        <button className='flex flex-row m-auto bg-slate-300 border-2 border-gray-400 p-1 rounded-md hover:bg-slate-400'>
        <img src={del}/>
        <p className='ml-2'>Delete</p> 
        </button>
        </div>
        <div className='w-1/3'>       
        <button className='flex flex-row m-auto bg-slate-300 border-2 border-gray-400 p-1 rounded-md hover:bg-slate-400'>
        <img src={settings}/>
        <p className='ml-2'>Modify</p> 
        </button>
        </div>


    </div>
  )
}
