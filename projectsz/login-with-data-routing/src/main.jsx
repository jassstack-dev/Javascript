import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './routes/AppRoutes.jsx'
import { AuthContext } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <AppRoutes/>
  </AuthContext>
)
