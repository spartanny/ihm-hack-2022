import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import LandingPage1 from './views/LandingPage1'
import LandingPage2 from './views/LandingPage2'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/asin1" element={<LandingPage />} />
          <Route path="/asin2" element={<LandingPage1 />} />
          <Route path="/asin3" element={<LandingPage2 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
