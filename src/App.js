import React, { Component } from 'react';
import Home from './Home.js';
import AboutMe from './AboutMe.js'
import Education from './Education.js'
import Skills from './Skills.js'
import Creations from './Creations.js'
import Modal from './Modal.js'
import { BrowserRouter, Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import pdf from './resources/SeifertResume.pdf'
import $ from 'jquery'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ModalModalExample from './Modal.js';



//import {Navbar, NavItem, NavDropdown, Nav, MenuItem, Jumbotron, Button} from 'react-bootstrap';
var col = "yellow";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    library.add(fab, faEnvelope);
    const urlLinkedIn = "https://linkedin.com/in/ben-seifert-a57502128";
    const urlGithub = "https://github.com/seifertben?tab=repositories";
    return (
      <html>

        <div id="mobilenav">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Info</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
              </ul>
            </div>
          </nav>
        </div>

        <div className="image">
          <img src={require('./resources/mw-2mass.jpg')} />
          <a href=""><h1 id="name_title">Benjamin Seifert</h1></a>
          <div id="navbar">
            <a id="toplk" href="#aboutme">About Me</a>
            <a id="middlelk" href="#education">Education</a>
            <a id="bottomlk" href="#skills">Skills</a>
            <a id="bottomlk2" href="#creations">Creations</a>
            <a href={pdf} target="_blank"><Icon name='file outline' size='small' />Resume</a>
            <div id="icons">
              <a href={urlLinkedIn}><FontAwesomeIcon icon={['fab', 'linkedin']} id="iconic" size="1x" /></a>
              <a href={urlGithub}><FontAwesomeIcon icon={['fab', 'github']} id="iconic" size="1x" /></a>
              <a href=""><FontAwesomeIcon icon="envelope" id="iconic" size="1x" /></a>
            </div>
          </div>
        </div>
        <div id="aboutme"><AboutMe></AboutMe></div>
        <div id="education"><Education></Education></div>
        <div id="skills"><Skills></Skills></div>
        <div id="creations"><Creations></Creations></div>
        <footer><h3>Copyright© Ben Seifert 2018</h3></footer>
        <BrowserRouter>
          <Route path="/home" component={Home} />
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
      if ($(this).scrollTop() >= $("#aboutme").offset().top) {
        document.getElementById("toplk").style.backgroundColor = "black";
        document.getElementById("middlelk").style.removeProperty('background-color');
        document.getElementById("bottomlk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.removeProperty('background-color');
      }
      if ($(this).scrollTop() >= $("#education").offset().top) {
        document.getElementById("toplk").style.removeProperty('background-color');
        document.getElementById("middlelk").style.backgroundColor = "black";
        document.getElementById("bottomlk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.removeProperty('background-color');
      }
      if ($(this).scrollTop() >= $("#skills").offset().top) {
        document.getElementById("toplk").style.removeProperty('background-color');
        document.getElementById("middlelk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.removeProperty('background-color');
        document.getElementById("bottomlk").style.backgroundColor = "black";

      }
      if ($(this).scrollTop() >= $('#creations').offset().top) {
        document.getElementById("toplk").style.removeProperty('background-color');
        document.getElementById("middlelk").style.removeProperty('background-color');
        document.getElementById("bottomlk").style.removeProperty('background-color');
        document.getElementById("bottomlk2").style.backgroundColor = "black";

      }
    })

    $("#toplk").click(function () {
      $("#toplk").css("backgroundColor", "black");
    });
    $("#middlelk").click(function () {
      $("#middlelk").css("backgroundColor", "black");
    });
    $("bottomlk").click(function () {
      $("#bottomlk").css("backgroundColor", "black");
    });
    $("#bottomlk2").click(function () {
      $("#bottomlk2").css("backgroundColor", "black");
    });

  }

}
export default App;
