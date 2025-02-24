import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Si tienes estilos globales, inclúyelos aquí (aunque en este caso se usa CDN para Tailwind)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
