import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./navbar/Navbar"
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer/>
  </BrowserRouter>
);