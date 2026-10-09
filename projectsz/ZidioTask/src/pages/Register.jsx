import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router";
import { Mystore } from '../context/AuthContext';

const Register = () => {

    
    const {ZidioUser, setZidioUser} = useContext(Mystore)
    const [showPupup, setshowPupup] = useState(false)
const [userExist, setuserExist] = useState(false)
    

    const navigate = useNavigate()
    

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm()

    function registerFormSubmit(data){

        const isExist = ZidioUser.some((user)=> user.email === data.email)

        if(isExist){
            setuserExist(true)
            return
        }

        const arr = [...ZidioUser,data]
setZidioUser(arr)
setshowPupup(true)
localStorage.setItem('registerUser', JSON.stringify(arr))


    }

  return (
     <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4 sm:p-8">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side - Form */}
        <div className="p-6 sm:p-10 lg:p-12">

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            ZidioTask
          </h1>

          <div className="mt-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Sign up and get your 30-day free trial.
            </p>
          </div>

          <form  onSubmit={handleSubmit(registerFormSubmit)} className="flex flex-col gap-2">

            {/* Full Name */}
            <label className="text-sm font-medium text-gray-700 mt-2">
  Full Name
</label>

<input
  {...register("name", {
    required: "Full name is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters",
    },
    validate: (value) =>
      value.trim().length >= 3 || "Please enter a valid name",
  })}
  type="text"
  placeholder="Enter your name"
  className="w-full border border-gray-300 p-3 rounded-xl outline-none placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black transition"
/>

{errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name.message}
  </p>
)}

            {/* Email */}
            <label className="text-sm font-medium text-gray-700 mt-3">
              Email Address
            </label>
            <input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  })}
  type="email"
  placeholder="Enter your email"
  className="w-full border border-gray-300 p-3 rounded-xl outline-none placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black transition"
/>

{errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {errors.email.message}
  </p>
)}

            {/* Password */}
            <label className="text-sm font-medium text-gray-700 mt-3">
  Password
</label>

<input
  {...register("password", {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      message:
        "Include uppercase, lowercase, number and special character",
    },
  })}
  type="password"
  placeholder="Create a password"
  className="w-full border border-gray-300 p-3 rounded-xl outline-none placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black transition"
/>

{errors.password && (
  <p className="text-red-500 text-sm mt-1">
    {errors.password.message}
  </p>
)}

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-5 bg-black text-white p-3 rounded-xl font-semibold hover:bg-gray-800 active:scale-[0.98] transition"
            >
              Create Account
            </button>

          </form>

          {/* Sign In */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?
              <Link
                to="/"
                className="ml-1 font-semibold text-black hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-6 leading-5">
            By creating an account, you agree to our{" "}
            <Link
              to="/terms"
              className="text-gray-600 underline hover:text-black"
            >
              Terms & Conditions
            </Link>
          </p>

        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block relative min-h-full bg-gray-900">

          <img
            src="https://images.unsplash.com/photo-1690191896755-7cd5d5998d1f?w=900&auto=format&fit=crop&q=80"
            alt="Team collaborating"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-10 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold leading-tight">
              Organize your work.
              <br />
              Achieve more.
            </h2>
            <p className="mt-3 text-sm text-gray-200 leading-6">
              Manage your tasks, collaborate with your team,
              and keep everything moving forward.
            </p>
          </div>

        </div>

      </div>
      {/* show pupup for register successfully */}
      {showPupup && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

        <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-3xl text-green-600">✓</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
                Registration Successful!
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                Your account has been created successfully.
            </p>

            <button
                onClick={() => setshowPupup(false)}
                className="mt-6 w-full rounded-xl bg-black p-3 font-semibold text-white transition hover:bg-gray-800"
            >
                Continue
            </button>

        </div>
    </div>
)}

{/* show pupup for user exist */}
  {userExist && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

        <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-3xl text-red-600">✕</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
               User Already Exist
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                Try Another email to register here
            </p>

            <button
                onClick={() => setuserExist(false)}
                className="mt-6 w-full rounded-xl bg-black p-3 font-semibold text-white transition hover:bg-gray-800"
            >
                Continue
            </button>

        </div>
    </div>
)}
    </div>
  )
}

export default Register