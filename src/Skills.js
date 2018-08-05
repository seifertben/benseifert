import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Skills.css';
import { Segment, Progress, Popup } from 'semantic-ui-react';
import $ from 'jquery';

class Skills extends Component {
  render() {
    return (
      <html>
        <div id="contentC">
          <h1 id="headerC" className="hvr-sweep-to-right">My Skills</h1>
          <p>I included this section despite some reservations. The skills I've listed here are far from the
            only ones I have, and I am also constantly learning. Especially in technology, the rapid pace of
            advancements means you always have to be on your feet to stay ahead of the curve. I've compiled
            a little bar containing some of the things I've picked up from my school and work experience below. I haven't
            included any programming languages below. They have their own section.
          </p>

          <div id="skilldock" className="hvr-glow">
            <div className="tooltip"><img id="toola" className="hvr-grow" src={require('./resources/swarm.png')} /><div id="tool1" className="tooler"><span>Docker</span></div></div>
            <div className="tooltip"><img id="toolb" className="hvr-grow" src={require('./resources/openshift.png')} /><div id="tool2" className="tooler"><span>Openshift</span></div></div>
            <div className="tooltip"><img id="toolc" className="hvr-grow" src={require('./resources/elastic.png')} /><div id="tool3" className="tooler"><span>Elasticsearch</span></div></div>
            <div className="tooltip"><img id="toold" className="hvr-grow" src={require('./resources/quantum.png')} /><div id="tool4" className="tooler"><span>Quantum Mechanics</span></div></div>
            <div className="tooltip"><img id="toole" className="hvr-grow" src={require('./resources/relativity.png')} /><div id="tool5" className="tooler"><span>Relativity</span></div></div>
            <div className="tooltip"><img id="toolf" className="hvr-grow" src={require('./resources/particles.png')} /><div id="tool6" className="tooler"><span>Particle Physics</span></div></div>
            <div className="tooltip"><img id="toolg" className="hvr-grow" src={require('./resources/fluids.png')} /><div id="tool7" className="tooler"><span>Fluid Dynamics</span></div></div>
            <div className="tooltip"><img id="toolh" className="hvr-grow" src={require('./resources/hadoop.png')} /><div id="tool8" className="tooler"><span>Hadoop</span></div></div>
            <div className="tooltip"><img id="tooli" className="hvr-grow" src={require('./resources/latex.png')} /><div id="tool9" className="tooler"><span>Latex</span></div></div>
            <div className="tooltip"><img id="toolj" className="hvr-grow" src={require('./resources/electro.png')} /><div id="tool10" className="tooler"><span>Electrodynamics</span></div></div>
          </div>

          <div id="skilldockmobile">
            <div id="row1">
              <img src={require('./resources/swarm.png')} />
              <img src={require('./resources/openshift.png')} />
              <img src={require('./resources/elastic.png')} />
            </div>
            <div id="row2">
              <img src={require('./resources/quantum.png')} />
              <img src={require('./resources/relativity.png')} />
              <img src={require('./resources/particles.png')} />
            </div>
            <div id="row3">
              <img src={require('./resources/fluids.png')} />
              <img src={require('./resources/hadoop.png')} />
              <img src={require('./resources/latex.png')} />
            </div>
            <div id="row3">
              <img src={require('./resources/electro.png')} />
            </div>

          </div>

          <p>I thought I'd digress here into a couple of other skills I have. I'm an amateur stock investor.
            I've read countless books on fundamental and technical analysis and maintain a personal portfolio.
            In the past I also did a lot of tinkering with telescopes. With today's high tech telescopes though,
            some of this skill has become obsolete. On the musical side I can play the trombone and baritone.
            Lastly, we arrive at the part most software firms care about: programming skills. I shouldn't focus too
            much on the specific languages, as it is not too hard to learn others once you understand the fundamentals.
            Despite this, I'll still list a couple that I have the most extensive experience in:
            </p>
          <p>Java</p><Progress percent={90} color='green' />
          <p>Python</p><Progress percent={85} color='olive' />
          <p>C</p><Progress percent={70} color='yellow' />
          <p>HTML/CSS/JS</p><Progress percent={70} color='orange' />
          <p>On top of these languages, I also have a good deal of exposure to scientific languages such as
            Matlab and Mathematica.
          </p>
        </div>
      </html>
    );
  }
  componentDidMount() {
    $("#headerC").click(function () {
      document.getElementById("contentC").scrollIntoView();
    });
  }
}

export default Skills;
