import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './context/AuthProvider.jsx'
const queryClient = new QueryClient();
import AOS from 'aos';
import 'aos/dist/aos.css'  


AOS.init({
  duration: 1000, 
  easing: 'ease-in-out',
  once: true, 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>


        </RouterProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: { fontSize: '14px' },
          }}></Toaster>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
