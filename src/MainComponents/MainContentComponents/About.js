import React from 'react';
import climbOne from '../images/IMG_4431.JPG';
import wedding from '../images/wedding.jpg';
import '../MainContentComponents/About.scss';

export default function About() {
  return (
    <section className="about-page">
      <img className="about-image-left" src={climbOne} alt="climbing photo"/>
      <h2 className="aboutHeader">About Me</h2>
      <p className="about-story">
        After spending the majority of my life focused on athletics, the pandemic allowed me to take a step back and reassess my options for self growth, community engagement, and financial stability. 
        Some networking and research later, I found a love for Turing School of Software and Design because the program offered not only the development of your technical skills but also creating a whole person within the tech industry.
        Turing's daily emphasis on professional development and breaking down the industry's historical barriers for both the users and the creators of applications stood out above the rest.
      </p>
      <img className="about-image-right" src={wedding} alt="wedding photo"/>
      <p className="about-story">
        I am drawn to the unique challenges the field of software development can offer. The idea of "the more you know, the less you know" is extremely relevant to coding, meaning it provides you with immeasurable growth opportunity and will never stay the same. 
        This is a dream because there will always be a more efficient way to solve a problem. I am passionate about this process, the challenges that lie ahead, and to expand my critical-thinking skills with each new project I take on.
      </p>
      <p className="about-story">
        When not racking my brain over the latest bug, I usually am decompressing with the latest Marvel content or Olivia Rodrigo's SOUR album on repeat. I have grown to thoroughly enjoy any and all opportunity to spend quality time with friends. It really is just the little things. Chalk it up to nostalgia or getting old, I guess?
      </p>
      <p className="about-closer">
        Thanks for checking out my page!
      </p>
    </section>
  )
}