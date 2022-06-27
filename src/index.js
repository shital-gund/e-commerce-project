import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './theam layout/navbar/Navbar';
import './assets/css/main.css';
import './assets/css/vendor.css'
import Footer from './theam layout/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  
    <App />
    <Footer/>
  </BrowserRouter>
);
reportWebVitals();
