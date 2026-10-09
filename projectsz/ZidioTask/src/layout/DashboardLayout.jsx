import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const DashboardLayout = () => {
  return (
    <div className='h-screen p-2 grid grid-cols-[1fr_6fr]'>
        
     <Sidebar/>
        <div className='overflow-auto pl-5'>
            <Navbar/>
        <Outlet/>
        </div>

        </div>
  )
}

export default DashboardLayout