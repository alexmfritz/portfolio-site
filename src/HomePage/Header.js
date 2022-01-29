import React from 'react';
import './styles/Header.scss';
import HeaderLogo from './HeaderLogo';
import NavLinks from './NavLinks';

export default function Header(props) {
  return (
    <header>
      <nav className="header-nav">
        <HeaderLogo />
        <NavLinks onClick={props.onClick}/>
      </nav>
    </header>
  )
}

