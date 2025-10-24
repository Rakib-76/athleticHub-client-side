import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './providers/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
     <AuthProvider>
       <div className='bg-white min-h-screen'>
          <RouterProvider router={router} />
       </div>
    </AuthProvider>
   </QueryClientProvider>
  </StrictMode>,
)
 
