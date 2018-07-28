import React, { Component } from 'react';
import logo from './logo.svg';
import './Education.css';
import{ Segment } from 'semantic-ui-react';


class Education extends Component {
  render() {
    return (
      <html>
        <div id="contentB">
          <h1>My Education</h1>
            <p>Brown University, Sc.B. Physics A.B. Computer Science May 2019<img id ="brown" src={require('./resources/shield.png')} /><br/>
            <p id= "ed_details">Organizations: Brown Debate, Investment Club<br/><br/>
            Coursework: Artificial Intelligence, Software Engineering, Computer Systems, Algorithms and Data Structures<br />
            Intro. to Object Oriented Prog., Thermodynamics and Stat. Mech., Quantum Mechanics, Physics Laboratory<br />
          Advanced Classical Mechanics, Intro. to Relativity, Analytical Mechanics</p>
            </p>
            <p>North Hagerstown High School, Graduated June 2015<img id="nh" src={require('./resources/nh.jpg')} /><br/>
            <p id= "ed_details">Organizations: Brown Debate, Investment Club<br/><br/>
            Coursework: Artificial Intelligence, Software Engineering, Computer Systems, Algorithms and Data Structures<br />
            Intro. to Object Oriented Prog., Thermodynamics and Stat. Mech., Quantum Mechanics, Physics Laboratory<br />
          Advanced Classical Mechanics, Intro. to Relativity, Analytical Mechanics</p>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Quam adipiscing vitae proin sagittis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Libero enim sed
               faucibus turpis in. Volutpat sed cras ornare arcu.
               Pharetra massa massa ultricies mi quis hendrerit dolor. Posuere ac ut consequat semper. Sem
               et tortor consequat id. Diam in arcu cursus euismod quis viverra nibh. Commodo ullamcorper a
               lacus vestibulum sed arcu non. Nulla malesuada pellentesque elit eget. Metus dictum at tempor
             commodo ullamcorper a. Sagittis nisl rhoncus mattis rhoncus urna neque. </p>
          </div>
      </html>
    );
  }
}

export default Education;
