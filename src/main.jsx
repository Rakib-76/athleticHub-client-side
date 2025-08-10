import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <div className='bg-white min-h-screen'>
          <RouterProvider router={router} />
       </div>
    </AuthProvider>
  </StrictMode>,
)
 
