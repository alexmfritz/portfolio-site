import React from 'react';
import reactLogo from './images/logo192.png';

export default function HeaderLogo() {
  return (
    <section className="header-image-box flex center">
      <img className="header-react-logo" src={reactLogo} alt="React Logo"></img>
      <h1 className="header-title">amf:design</h1>
    </section>
  )
}