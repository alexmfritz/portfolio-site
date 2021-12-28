import './MainContent.scss';
import React from 'react';
import climbTwo from './images/IMG_4690.jpg';

export default function MainContent() {
  return (
    <main className="main">
        <div className="flex column center">
          <img className="image scale-in-center" src={climbTwo} alt="climbing"></img>
          <p className="p-intro focus-in-expand-fwd">Hello! Welcome to my first creation with React!
            I am currently a Front-End Software Developer student at Turing School of Software & Design.
          </p>
        </div>
    </main>
  )
}