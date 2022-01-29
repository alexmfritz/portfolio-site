import React from 'react';
import IntroPage from './MainContentComponents/IntroPage';
import About from './MainContentComponents/About';
import Pricing from './MainContentComponents/Pricing';
import ContactMe from './MainContentComponents/ContactMe';

export default function MainContent(props) {
  if (props.data.page === 'home') {
    return (
      <IntroPage />
    )
  } else if (props.data.page === 'about') {
    return (
      <About />
    )
  } else if (props.data.page === 'pricing') {
    return (
      <Pricing />
    )
  } else if (props.data.page === 'contact') {
    return (
      <ContactMe />
    )
  }
}
