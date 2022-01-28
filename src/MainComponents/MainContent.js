import React from 'react';
import IntroPage from './MainContentComponents/IntroPage';
import About from './MainContentComponents/About';

export default function MainContent(props) {
  if (props.data.page === 'home') {
    return (
      <IntroPage />
    )
  } else if (props.data.page === 'about') {
    return (
      <About />
    )
  }
}
