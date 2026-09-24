import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          ExpenseTracker
        </div>

        {/* Center Title */}
        <div className="text-lg font-semibold text-gray-800">
          My Finances
        </div>

        {/* Add Button */}
        <button onClick={()=> setToggle(prev => !prev)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
          + Add
        </button>

      </div>
    </nav>
  )
}

export default Navbar