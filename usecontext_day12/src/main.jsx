import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextAPI from './Components/ContextAPI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextAPI>
    <App />
  </ContextAPI>,
)
