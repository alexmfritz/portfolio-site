import './Header.scss';
import React from 'react';
import reactLogo from './images/logo192.png'

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
            <li className="nav-drop-one">About</li>
            <li className="nav-drop-two">Pricing</li>
            <li className="nav-drop-three">Contact</li>
            <li className="nav-drop-four">Portfolio</li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

