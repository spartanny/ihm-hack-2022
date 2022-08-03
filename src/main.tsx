import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './views/Product'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/asin" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
