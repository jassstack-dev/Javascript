
import React, { useContext, useEffect, useState } from "react";
import { Mail, Phone, MapPin, MoreHorizontal, Users,LoaderCircle } from "lucide-react";
import { axiosInstance } from "../config/axiosInstance";
import { Mystore } from "../context/AuthContext";

const Team = () => {

    const {UserData, setUserData,loadingData,setloadingData } = useContext(Mystore)
    
   
   

    const userApi =async ()=>{
const res =await axiosInstance.get('/users')
// console.log(res.data)
setUserData(res.data)
setloadingData(false)

    }

    useEffect(()=>{
        userApi()
    },[])

    if(loadingData){
        return <div>Loading Data...</div>
    }
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Team Members
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your team members and their information.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3">
          <Users size={20} className="text-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            Total Members: {UserData.length}
          </span>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {/* Team Member Card */}
        {
            UserData.map((user)=>{
                return <div key={user.id} className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-md">

          {/* Card Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold uppercase text-blue-700">
                {user.name.firstname.charAt(0)}
  {user.name.lastname.charAt(0)}

              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  {user.name.firstname} {user.name.lastname} 
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  @{user.username} 
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Member options"
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
            >
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Role */}
          <div className="mt-5">
            <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
              Team Member
            </span>
          </div>

          {/* Contact Details */}
          <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-gray-400" />
              <div className="min-w-0">
                <p className="text-xs text-gray-400">Email Address</p>
                <p className="mt-1 break-all text-sm font-medium text-gray-700">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400">Phone Number</p>
                <p className="mt-1 text-sm font-medium text-gray-700">
                  {user.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400">Address</p>
                <p className="mt-1 text-sm font-medium capitalize leading-5 text-gray-700">
                  {user.address.number} {user.address.street} , {user.address.city} , {user.address.zipcode} 
                </p>
              </div>
            </div>

          </div>

        </div>
            })
        }
      </div>

      
    </div>
  );
};

export default Team;

