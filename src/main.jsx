import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import './index.css'
import Layout from './routes/Layout';
import DetailView from './routes/DetailView';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}/>
    <Route index={true} element={<App />} />
    <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
    </Routes>

  </BrowserRouter>
  
  </StrictMode>
  ,
)
