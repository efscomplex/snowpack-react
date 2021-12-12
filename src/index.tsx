//@ts-nocheck

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootEl = document.getElementById('root')

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
