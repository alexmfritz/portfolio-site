import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const root = document.getElementById('root');


ReactDOM.render(
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>,
  root
)