import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home/home'
import LoginRegister from './auth/loging'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
    <LoginRegister></LoginRegister>
  </StrictMode>,
)
