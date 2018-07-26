import React, { Component } from 'react';
import Home from './Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

//import {Navbar, NavItem, NavDropdown, Nav, MenuItem, Jumbotron, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <html>
        <div id="navbar">
          <a href="home">Home</a>
          <a href="about me">News</a>
          <a href="my studies">Contact</a>
        </div>
        <Home></Home>

        <BrowserRouter>
          <Route path="/home" component={Home} />
        </BrowserRouter>
      </html>

    );
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      console.log("hi");

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }
}




export default App;
