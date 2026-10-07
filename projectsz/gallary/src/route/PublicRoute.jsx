import React, { useContext } from 'react'
import { MyStore } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
    const {loginUser} = useContext(MyStore)

    if(loginUser){
        return <Navigate to='/main' />
    }

  return (
    <div><Outlet/></div>
  )
}

export default PublicRoute