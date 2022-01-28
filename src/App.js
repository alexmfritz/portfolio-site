import React from 'react';
import Header from './MainComponents/Header';
import MainContent from './MainComponents/MainContent';
import Footer from './MainComponents/Footer';

export default class App extends React.Component {
  state = {
    page: "home"
  }

  handleClick = (event) => {
    const { id } = event.target;
    console.log(id)
    this.setState({ page: id})
  }

  render = () => {
    return (
      <div>
        <Header onClick={this.handleClick}/>
        <MainContent data={this.state}/>
        <Footer />
      </div>
    )
  }
}