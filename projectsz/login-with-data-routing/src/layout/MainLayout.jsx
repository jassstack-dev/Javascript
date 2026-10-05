import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='h-screen p-2 grid grid-cols-[1fr_7fr]'>
        <Navbar/>
        <div className='overflow-auto'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout