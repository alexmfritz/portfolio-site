import './MainContent.scss';
import React, {Component} from 'react';
import climbTwo from './images/IMG_4690.jpg';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      link: "home"
    }
  }

  render() {
    return (
      <main className="flex column center">
            <img src={climbTwo} alt="climbing"></img>
            <p>Hello! Welcome to my first creation with React and Sass!
              I am currently a Front-End Software Developer student at Turing School of Software & Design.
            </p>
      </main>
    )
  }
  
}

export default MainContent;