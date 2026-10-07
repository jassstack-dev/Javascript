
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoute from './route/AppRoute.jsx'
import { ContextProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  
   <ContextProvider>
    <AppRoute/>
    <ToastContainer/>
   </ContextProvider>

)
