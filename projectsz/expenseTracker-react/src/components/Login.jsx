
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({setLogin}) => {

    
  
    const {
        register,
        handleSubmit,
        reset,
        formState = {errors}
    } = useForm()

    function loginUser(data){
console.log(data)
let naam = data.name




if(data.name === "vimal" && data.password === "12345"){
    sessionStorage.setItem('isLoggedIn', "true")
setLogin(false)

return
}



alert("Invalid name or password");

    }
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginUser)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
            {...register('name', {
                required: 'name is required'
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
            {...register('password', {
                required: "password is required"
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
          
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;

