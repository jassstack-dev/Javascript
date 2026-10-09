import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Mystore } from '../context/AuthContext'

const PublicRoute = () => {

    const {loginUser} = useContext(Mystore)
   

    if(loginUser){
        return <Navigate to='/home'/>
    }

  return (
    <div><Outlet/></div>
  )
}

export default PublicRoute