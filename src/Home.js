import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Home.css';
import{ Segment } from 'semantic-ui-react';


class Home extends Component {
  render() {
    return (
      <html>
        <div id="banner">
          <h1>Welcome to my site!</h1>
        </div>
        <div id="banner">
          <h1>Welcome to my site!</h1>
        </div>
        <div id="banner">
          <h1>Welcome to my site!</h1>
        </div>
        <div id="banner">
          <h1>Welcome to my site!</h1>
        </div>
        <div id="banner">
          <h1>Welcome to my site!</h1>
        </div>
        <div id="banner">
          <h1>Welcome to my site!</h1>
        </div>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
      </html>
    );
  }
}

export default Home;
