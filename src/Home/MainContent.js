import './MainContent.scss';
import React from 'react';
import climbTwo from './images/IMG_4690.jpg';

export default function MainContent() {
  return (
    <main className="flex column center">
          <img src={climbTwo} alt="climbing"></img>
          <p>Hello! Welcome to my first creation with React!
            I am currently a Front-End Software Developer student at Turing School of Software & Design.
          </p>
    </main>
  )
}