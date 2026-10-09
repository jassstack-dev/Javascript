import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import DashboardLayout from '../layout/DashboardLayout'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Team from '../pages/Team'
import Task from '../pages/Task'
import Projects from '../pages/Projects'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element:<PublicRoute/>,
            children:[
                {
                    path:'',
                    element :<AuthLayout/>,
            children:[
                {
                    path: '',
                    element:<Login/>
                },
                {
                    path :'register',
                    element:<Register/>
                }
            ]
                }
            ]
        },
        {
            path:'/home',
            element:<ProtectedRoute/>,
            children:[
                {
                    path:'',
                    element:<DashboardLayout/>,
            children:[
                {
                    path:'',
                    element:<Dashboard/>
                },
                {
                    path:'team',
                    element:<Team/>
                },
                {
                    path:'task',
                    element:<Task/>
                },
                {
                    path:'projects',
                    element:<Projects/>
                }
            ]
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes