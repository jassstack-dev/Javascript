import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/AuthContext";
import { useNavigate } from "react-router";


const Login = () => {

    const navigate = useNavigate()

    const { setLoggedInUser,registerUser} = useContext(MyStore)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);

    let isloggedIn = registerUser.find((val)=> val.email === data.email && val.password === data.password)

    if(!isloggedIn){
      alert('invalid credential') 
    }

    
    setLoggedInUser(data)
localStorage.setItem('loggedInUser', JSON.stringify(data))
    navigate('/main')
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;