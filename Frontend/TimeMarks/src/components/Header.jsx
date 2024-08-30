import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export const Header = () => {
  return (
    <div className='w-full h-12 flex flex-row'>
      <div className='w-full flex flex-row items-center m-2'>
        <div className='w-1/4 text-start text-3xl font-rubik text-black cursor-pointer font-light mr-20'>
          <h1>TimeMarks</h1>
        </div>
        <div className='w-1/6 font-rubik text-gray-700 text-medium mt-1 cursor-pointer hover:text-blue-700'>
          <p>Tutorial</p>
        </div>
        <div className='w-1/6 font-rubik text-gray-700 text-medium mt-1 cursor-pointer hover:text-blue-700'>
          <p>Info</p>
        </div>
        <div className='w-1/6 font-rubik text-gray-700 text-medium mt-1 cursor-pointer hover:text-blue-700'>
          <p>Contact</p>
        </div>

        <div className="w-1/6 ml-28">
       <Button color="primary" variant="solid">
        Log In
       </Button>  
       </div>
       <div className="w-1/6">
       <Button color="primary" variant="solid">
        Sing Up
       </Button>  
       </div>
      
      </div>
   

    </div>
  )
}
