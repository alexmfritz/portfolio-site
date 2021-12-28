import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './Home/Header';
import MainContent from './Home/MainContent';
import Footer from './Home/Footer';

const root = document.getElementById('root');


ReactDOM.render(
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>,
  root
)

