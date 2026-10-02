import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyStore } from '../context/AuthContext'

const ProtectedLayout = () => {

    const {loggedInUser} = useContext(MyStore)

  if(!loggedInUser){
    return <Navigate to='/' />
  }

  

  return (
    <div><Outlet/></div>
  )
}

export default ProtectedLayout