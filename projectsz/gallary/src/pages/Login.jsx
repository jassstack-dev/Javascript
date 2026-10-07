import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyStore } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

   const {registerUser, loginUser, setLoginUser}  = useContext(MyStore)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()


  const formSubmit = (data) =>{
const user = registerUser.find((val)=> val.email === data.email && val.password === data.password)

if(!user){
    toast.error('user not found')
    return
}

toast.success('user loggedIn')

setLoginUser(data)
localStorage.setItem('loggedInUser', JSON.stringify(data))
navigate('/main')


  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
            {...register('email')}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
            {...register('password')}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

        

          {/* Login Button */}
          <button
          type="submit"
           className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")} className="text-black font-semibold hover:underline">
            Create account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
