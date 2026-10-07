import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../Layout/MainLayout";
import Main from "../pages/Main";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import About from "../pages/About";
import AddPhotos from "../pages/AddPhotos";
import { MyStore } from "../context/AuthContext";

const AppRoute = () => {

  const {gallary,toggle} = useContext(MyStore)
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path:'',
              element:<Login/>
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: (
                toggle ? <Main gallery={gallary} /> :<AddPhotos/>
              )
            },
            {
              path:'about',
              element:<About gallery={gallary} />
            },
            {
              path:'add-photos',
              element:<AddPhotos/>
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
