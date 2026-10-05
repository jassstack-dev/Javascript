import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Auth from '../layout/Auth'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layout/MainLayout'

import ProtectedLayout from './ProtectedLayout'
import PublicRoute from './PublicRoute'
import Homepage from '../pages/Homepage'
import ProductsPage from '../pages/ProductsPage'
import UsersPage from '../pages/UsersPage'

const AppRoutes = () => {

  const router = createBrowserRouter([
{
  path:'/',
  element:<PublicRoute/>,
  children:[
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
    }
  ]
},
    {
      path:'/main',
      element:<ProtectedLayout/>,
      children:[
        {
          path:'',
          element:<MainLayout/>,
          children:[
            {
              path:'',
              element:<Homepage/>
            },
            {
              path:'products',
              element:<ProductsPage/>
            },
            {
              path:'users',
              element:<UsersPage/>
            }
          ]
        }
      ]
    }
  ])
  
  return <RouterProvider router={router} />
}

export default AppRoutes