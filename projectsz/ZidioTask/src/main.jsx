import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { ContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
 <ContextProvider>
  <AppRoutes/>
 </ContextProvider>
)
