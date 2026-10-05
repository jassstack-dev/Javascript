import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyStore } from '../context/AuthContext'

const PublicRoute = () => {

    const {loggedInUser} = useContext(MyStore)

  if(loggedInUser){
    return <Navigate to='/main' />
  }

  

  return (
    <div><Outlet/></div>
  )
}

export default PublicRoute