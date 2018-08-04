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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Quam adipiscing vitae proin sagittis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Libero enim sed
             faucibus turpis in. Volutpat sed cras ornare arcu.</p>

          <div id="skilldock" className="hvr-glow">
            <div className="tooltip"><img id="1" className="hvr-grow" src={require('./resources/swarm.png')} /><div id="entry1"></div></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/openshift.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/elastic.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/quantum.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/relativity.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/particles.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/fluids.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/hadoop.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/latex.png')} /></div>
            <div className="tooltip"><img className="hvr-grow" src={require('./resources/electro.png')} /></div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Quam adipiscing vitae proin sagittis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Libero enim sed
             faucibus turpis in. Volutpat sed cras ornare arcu.
             Pharetra massa massa ultricies mi quis hendrerit dolor. Posuere ac ut consequat semper. Sem
             et tortor consequat id. Diam in arcu cursus euismod quis viverra nibh. Commodo ullamcorper a
             lacus vestibulum sed arcu non. Nulla malesuada pellentesque elit eget. Metus dictum at tempor
             commodo ullamcorper a. Sagittis nisl rhoncus mattis rhoncus urna neque. </p>
          <p>Java</p><Progress percent={90} color='green' />
          <p>Python</p><Progress percent={85} color='olive' />
          <p>C</p><Progress percent={70} color='yellow' />
          <p>HTML/CSS/JS</p><Progress percent={70} color='orange' />
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
