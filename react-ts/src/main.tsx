import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pr-6-7/App'
import { store } from './pr-6-7/pages/quiz/store/store'
import { Provider } from 'react-redux'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
