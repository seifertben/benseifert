import React, { Component } from 'react';
import logo from './logo.svg';
import './Creations.css';
import { BrowserRouter, Route } from 'react-router-dom';
import $ from 'jquery'


class Creations extends Component {
  render() {
    return (
      <html>
        <div id="contentD">
          <h1 id="headerD" className="hvr-sweep-to-right">My Creations</h1>
          <p id="dinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Quam adipiscing vitae proin sagittis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Libero enim sed
             faucibus turpis in. Volutpat sed cras ornare arcu.
             Pharetra massa massa ultricies mi quis hendrerit dolor. Posuere ac ut consequat semper. Sem
             et tortor consequat id. Diam in arcu cursus euismod quis viverra nibh. Commodo ullamcorper a
             lacus vestibulum sed arcu non. Nulla malesuada pellentesque elit eget. Metus dictum at tempor
             commodo ullamcorper a. Sagittis nisl rhoncus mattis rhoncus urna neque. </p>
          <div id="cards">
            <a href=""><div className="card">
              <img src={require('./resources/Linux-Shell.png')} />
              <div className="container">
                <h2><b>Shell</b></h2>
                <p className="cardinfo">A program that emulates the bash shell. Runs inside the bash shell and executes bash commands. Written in C.</p>
              </div>
            </div></a>
            <a href=""><div className="card">
              <img src={require('./resources/risk_nobg.png')} />
              <div className="container">
                <h2><b>Risk</b></h2>
                <p className="cardinfo">The classic board game implemented as a web application. Also one of my favorite games.</p>
              </div>
            </div></a>
            <a href=""><div className="card">
              <img src={require('./resources/fitbit_nobg.png')} />
              <div className="container">
                <h2><b>Buddy</b></h2>
                <p className="cardinfo">Second place corporate Hackathon project that helps children manage chronic diseases.</p>
              </div>
            </div></a>
          </div>

                    
        </div>
      </html>
    );
  }
  componentDidMount() {
    $( "#headerD" ).click(function() {
      document.getElementById("contentD").scrollIntoView();
    });
  } 
  
}

export default Creations
