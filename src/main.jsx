import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#171a1d] text-[#fff]'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
