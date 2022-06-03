import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App';

import Home from './pages/home';
import Login from './pages/login';
import Estoque from './pages/estoque';
import Registro from './pages/registro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/estoque' element={ <Estoque /> } />
        <Route path='/registro' element={ <Registro /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
