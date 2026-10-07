import React, { useContext } from 'react'
import { MyStore } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

    const {loginUser} = useContext(MyStore)

    if(!loginUser){
        return <Navigate to='/' />
    }

  return (
    <div><Outlet/></div>
  )
}

export default ProtectedRoute