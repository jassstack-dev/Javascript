import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { Mystore } from '../context/AuthContext'


const ProtectedRoute = () => {

    const {loginUser} = useContext(Mystore)
    const navigate = useNavigate()

    if(!loginUser){
        return <Navigate to='/' />
    }

  return (
    <div><Outlet/></div>
  )
}

export default ProtectedRoute;