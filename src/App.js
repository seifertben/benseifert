import React, { Component } from 'react';
import Home from './Home.js';
import AboutMe from './AboutMe.js'
import Education from './Education.js'
import Skills from './Skills.js'
import Creations from './Creations.js'
import Pdf from './Pdf.js'
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { Segment, Container, Header, Icon } from 'semantic-ui-react'
import $ from 'jquery'


//import {Navbar, NavItem, NavDropdown, Nav, MenuItem, Jumbotron, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <div class="image">
          <img src={require('./resources/mw-2mass.jpg')} />
          <h1 id="name_title">Benjamin Seifert</h1>
          <div id="navbar">
            <a id="toplk" href="#top">About Me</a>
            <a id="middlelk" href="#middle">Education</a>
            <a id="bottomlk" href="#bottom">Skills</a>
            <a id="bottomlk2" href="#bottom2">Creations</a>
            <a href=""><Icon name='file outline' size='small'/>Resume</a>
            <div id="icons">
            <a href=""><Icon color='yellow' name='mail' size="small"/></a>
            <a href=""><Icon color='yellow' name='linkedin' size="small"/></a>
            <a href=""><Icon color='yellow' name='github' size="small"/></a>
            </div>
          </div>
        </div>
        <div id="top"><AboutMe></AboutMe></div>
        <div id="middle"><Education></Education></div>
        <div id="bottom"><Skills></Skills></div>
        <div id="bottom2"><Creations></Creations></div>
        <footer><h3>Copyright Ben Seifert 2018</h3></footer>
        <BrowserRouter>
          <Route path="/home" component={Home} />
        </BrowserRouter>
        <BrowserRouter>
        <Route path="/resume" component={Pdf} />
        </BrowserRouter>
      </html >
    );
  }
  
  componentDidMount() {
    var navbar = document.getElementById("navbar");
    //Make navbar transparent on initialization.
    navbar.classList.add("transparent");

    window.onscroll = function () { myFunction() };
    var sticky = navbar.offsetTop;
    var scrollTop = $(window).scrollTop();
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.remove("transparent");
        navbar.classList.add("sticky");
      } else {
        $("#navbar a").css("background-color", "");
        navbar.classList.remove("sticky");
        navbar.classList.add("transparent");
      }
    }
    $(document).on('scroll', function () {
      if ($(this).scrollTop() >= $('#top').offset().top) {
        document.getElementById("toplk").style.backgroundColor = "black";
        document.getElementById("middlelk").style.removeProperty('background-color');
        document.getElementById("bottomlk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.removeProperty('background-color');
      }
      if ($(this).scrollTop() >= $('#middle').offset().top) {
        document.getElementById("toplk").style.removeProperty('background-color');
        document.getElementById("middlelk").style.backgroundColor = "black";
        document.getElementById("bottomlk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.removeProperty('background-color');

      }
      if ($(this).scrollTop() >= $('#bottom').offset().top) {
        document.getElementById("toplk").style.removeProperty('background-color');
        document.getElementById("middlelk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.removeProperty('background-color');
        document.getElementById("bottomlk").style.backgroundColor = "black";

      }
      if ($(this).scrollTop() >= $('#bottom2').offset().top) {
        document.getElementById("toplk").style.removeProperty('background-color');
        document.getElementById("middlelk").style.removeProperty('background-color');
        document.getElementById("bottomlk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.backgroundColor = "black";

      }
    })
    
  }
  
}
export default App;
