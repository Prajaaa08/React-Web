import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './dist/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
