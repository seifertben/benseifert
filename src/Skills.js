import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Skills.css';
import { Segment, Progress } from 'semantic-ui-react';


class Skills extends Component {
  render() {
    return (
      <html>
        <div id="contentC">
          <h1>My Skills</h1>
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
}

export default Skills;
