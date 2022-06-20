import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';
import Estoque from './pages/estoque';
import Registro from './pages/registro';

export default function Index() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/estoque' element={ <Estoque /> } />
        <Route path='/registro' element={ <Registro /> } />
      </Routes>
    </BrowserRouter>
    );
}