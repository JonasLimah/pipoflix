import React from 'react';
import Style from './style.module.css'
import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';

export const App=()=>{
  return(
    <div className={Style.container}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}