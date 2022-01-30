import React from 'react';
import IntroPage from './MainContentComponents/IntroPage';
import About from './MainContentComponents/About';
import Pricing from './MainContentComponents/Pricing';
import ContactMe from './MainContentComponents/ContactMe';
import Portfolio from './MainContentComponents/Portfolio';

export default function MainContent(props) {
  switch (props.data.page) {
    case 'home': return ( <IntroPage /> )
    case 'about': return ( <About /> )
    case 'pricing': return ( <Pricing /> )
    case 'contact': return ( <ContactMe /> )
    case 'portfolio': return ( <Portfolio /> )
    default: return null;
  }
}
