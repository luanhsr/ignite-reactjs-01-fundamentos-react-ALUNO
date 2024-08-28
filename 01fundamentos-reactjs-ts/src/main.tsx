import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // o sinal '!' informa ao React que o elemento root ira existir.
)
