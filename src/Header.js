import './Header.css';
import React from 'react';
import reactLogo from './logo192.png'

export default function Header() {
  return (
    <header className="slide-in-bottom">
      <nav className="header-nav flex center between">
        <section className="header-image-box flex center">
          <img className="header-react-logo" src={reactLogo}></img>
          <h1 className="header-title">amf:design</h1>
        </section>
        <section className="header-nav-box">
          <ul className="header-nav-items flex end">
            <li className="nav-drop-one"><a href='./About.html'>About</a></li>
            <li className="nav-drop-two"><a href='./Pricing.html'>Pricing</a></li>
            <li className="nav-drop-three"><a href='./Contact.html'>Contact</a></li>
            <li className="nav-drop-four"><a href='./Portfolio.html'>Portfolio</a></li>
          </ul>
        </section>
      </nav>
    </header>
  )
}