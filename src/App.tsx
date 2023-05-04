import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Style from './style.module.css'
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home/Home';
import { Sobre } from './pages/Sobre/Sobre';
import { Contato } from './pages/Contato/Contato';
import { NotFounded } from './pages/NotFounded/NotFounded';

export const App=()=>{
  return(
    <Router >
      <Header/>
     <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/sobre' Component={Sobre}/>
      <Route path='/contato' Component={Contato}/>
      <Route path='*' Component={NotFounded}/>
     </Routes>
     <Footer/>
    </Router>
  );



}