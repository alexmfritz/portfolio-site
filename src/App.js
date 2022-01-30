import React from 'react';
import Header from './HomePage/Header';
import MainContent from './HomePage/MainContent';
import Footer from './HomePage/Footer';

export default class App extends React.Component {
  state = {
    page: "home"
  }

  handleClick = (event) => {
    const { id } = event.target;
    this.setState({ page: id})
  }

  render = () => {
    return (
      <div>
        <Header data={this.state} onClick={this.handleClick}/>
        <MainContent data={this.state}/>
        <Footer />
      </div>
    )
  }
}