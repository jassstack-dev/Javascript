import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Form = ({setUsers,setToggle,user}) => {

  

  
    const  {
        register,
        handleSubmit,
        reset,
        formState = {errors}
    } = useForm()

    function formSubmit(data){
        // console.log(data)
    reset()
    let arr = [...user, data]
        setUsers(arr)
        console.log(arr)
        localStorage.setItem('data', JSON.stringify(arr))

setToggle(prev => !prev)

    }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add Transaction
      </h2>

      <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>

          <input
          {...register('title')}
            type="text"
            placeholder="e.g. Salary, Food, Shopping"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>

          <input
          {...register('amount', {valueAsNumber: true})}
            type="number"
            placeholder="Enter amount"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>

          <select
           {...register('type')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
           {...register('category')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="travel">Travel</option>
            <option value="salary">Salary</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Button */}
        <button
         
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Transaction
        </button>

      </form>
    </div>
  )
}

export default Form