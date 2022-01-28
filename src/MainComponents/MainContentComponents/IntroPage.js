import React from 'react';
import climbTwo from '../images/IMG_4690.jpg';
import '../MainContentComponents/IntroPage.scss';

export default function IntroPage() {
  return (
    <section className="intro-page flex column center">
      <img className="intro-hero" src={climbTwo} alt="climbing"></img>
      <p>Hello! Welcome to my first creation with React and Sass!
        I am currently a Front-End Software Developer student at Turing School of Software & Design.
      </p>
    </section>
  )
}