import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='border-r border-gray-500 mr-2 flex flex-col justify-between pb-2 ' >
        <div>
            <h1>Logo</h1>
        <div className='flex flex-col gap-2 mt-5 ml-3'>
            <NavLink className={({isActive})=> isActive? "font-bold text-red-500 border-gray-500" : "text-black border-gray-500"} to={"/main"} end>Home</NavLink>
            <NavLink className={({isActive})=> isActive? "font-bold text-red-500 border-gray-500" : "text-black border-gray-500"}  to={"/main/users"}>Users</NavLink>
            <NavLink className={({isActive})=> isActive? "font-bold text-red-500 border-gray-500" : "text-black border-gray-500"} to={"/main/products"}>Products</NavLink>
        </div>
        </div>
        <button className='bg-red-600 text-white py-1 px-2 rounded mr-2 font-bold'>logout</button>
    </div>
  )
}

export default Navbar