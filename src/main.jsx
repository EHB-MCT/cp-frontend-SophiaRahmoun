import { StrictMode } from 'react'
import './index.css'
import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Sprookjes from './pages/Sprookjes.jsx'
import AboutUs from './pages/AboutUs.jsx';
import MakingOf from './pages/MakingOf.jsx';


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter basename="/cp-frontend-SophiaRahmoun/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sprookjes" element={<Sprookjes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/makingof" element={<MakingOf />} />
      </Routes>
    </BrowserRouter>  </React.StrictMode>,
)
