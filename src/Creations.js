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
          <p id="dinfo">The last thing I'd like to talk about is some of the things I've made. I included a couple of these
          projects below. You can click on them to see more. I have made the code available for some. I have
          restricted others to respect collaboration policies. You can request the code for any however if you'd like
          to see it. Note that I've written code for countless applications. I couldn't include it all here,
          but more is definitely available upon request. </p>
          <div id="cards">
            <a href="http://cs.brown.edu/courses/cs033/docs/proj/shell_1.pdf"><div className="card">
              <img src={require('./resources/Linux-Shell.png')} />
              <div className="container">
                <h2><b>Shell</b></h2>
                <p className="cardinfo">A program that emulates the bash shell. Runs inside the bash shell and executes bash commands. Written in C. Click for project description. Message for code.</p>
              </div>
            </div></a>
            <a href="http://tundraboygames.com/risk"><div className="card">
              <img src={require('./resources/risk_nobg.png')} />
              <div className="container">
                <h2><b>Risk</b></h2>
                <p className="cardinfo">The classic board game implemented as a web application.  Also one of my favorite games. Click to play it. See my <a href="https://github.com/seifertben/Risk">github account</a> for code.</p>
              </div>
            </div></a>
            <a href="https://drive.google.com/open?id=1cC5lLiWxmCN-OUWNUi2fXXcdRSJjZHQC"><div className="card">
              <img src={require('./resources/mars.png')} />
              <div className="container">
              <h2><b>Physics Stuff</b></h2>
                <p className="cardinfo">No, I didn't create Mars. But why not choose Earth's closest relative as inspiration for
                what the future could hold? Click this card to link to a portfolio of scientific papers.</p>
              </div>
            </div></a>
          </div>

          <div id="mobilecards">
            <a href="http://cs.brown.edu/courses/cs033/docs/proj/shell_1.pdf"><div className="card">
              <img src={require('./resources/Linux-Shell.png')} />
              <div className="container">
                <h2><b>Shell</b></h2>
                <p className="cardinfo">A program that emulates the bash shell. Runs inside the bash shell and executes bash commands. Written in C. Click for project description. Message for code.</p>
              </div>
            </div></a>
            <a href="http://tundraboygames.com/risk"><div className="card">
              <img src={require('./resources/risk_nobg.png')} />
              <div className="container">
                <h2><b>Risk</b></h2>
                <p className="cardinfo">The classic board game implemented as a web application. Also one of my favorite games.</p>
              </div>
            </div></a>
            <a href="https://drive.google.com/open?id=1cC5lLiWxmCN-OUWNUi2fXXcdRSJjZHQC"><div className="card">
              <img src={require('./resources/mars.png')} />
              <div className="container">
                <h2><b>Physics Stuff</b></h2>
                <p className="cardinfo">No, I didn't create Mars. But why not choose Earth's closest relative as inspiration for
                what the future could hold? Click this card to link to a portfolio of scientific papers.</p>
              </div>
            </div></a>
          </div>


        </div>
      </html>
    );
  }
  componentDidMount() {
    $("#headerD").click(function () {
      document.getElementById("contentD").scrollIntoView();
    });
  }

}

export default Creations
