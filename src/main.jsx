import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { reduxStore } from './gymdetails/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <provide store={reduxStore}>
    <App/>

    </provide>
  </StrictMode>
)
