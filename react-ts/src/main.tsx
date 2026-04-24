import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './lab-6-7/App'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
