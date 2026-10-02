import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Auth from '../layout/Auth'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layout/MainLayout'

import ProtectedLayout from './ProtectedLayout'

const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Auth/>,
      children:[
        {
          path:"",
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    },
    {
      path:'/main',
      element:<ProtectedLayout/>,
      children:[
        {
          path:'',
          element:<MainLayout/>
        }
      ]
    }
  ])
  
  return <RouterProvider router={router} />
}

export default AppRoutes