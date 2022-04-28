import React from 'react' //importa la biblioteca de react
import ReactDOM from 'react-dom/client' //es el que tiene todos los eventos relacionados al DOM
import App from './App'
import './index.css'
//import './dist/output.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
