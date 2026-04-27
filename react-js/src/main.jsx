import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pr-2.4-2.5/App'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)