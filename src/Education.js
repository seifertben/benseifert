import React, { Component } from 'react';
import logo from './logo.svg';
import './Education.css';
import { Segment } from 'semantic-ui-react';
import $ from 'jquery'


class Education extends Component {
  render() {
    return (
      <html>
        <div id="contentB">
          <h1 id="heducation" className="hvr-sweep-to-right">My Education</h1>
          <p>Brown University, Sc.B. Physics A.B. Computer Science May 2019<img id="brown" src={require('./resources/shield.png')} /><br />
            <p id="ed_details">Organizations: Brown Debate, Investment Club<br /><br />
              Coursework: Artificial Intelligence, Software Engineering, Computer Systems, Algorithms and Data Structures<br />
              Intro. to Object Oriented Prog., Thermodynamics and Stat. Mech., Quantum Mechanics, Physics Laboratory<br />
              Advanced Classical Mechanics, Intro. to Relativity, Analytical Mechanics</p>
          </p>
          <p>North Hagerstown High School, Graduated June 2015<img id="nh" src={require('./resources/nh.jpg')} /><br />
            <p id="ed_details">Organizations: Marching Band, Student Government, STEM club<br /><br />
              Graduated as valedictorian, also received IB Diploma.</p>
          </p>
          <p>As a student of both physics and computer science, I'm usually extremely occupied. I've taken a varied
            load of each subject. I also make sure to get in a class or two outside the sciences for variety. I have a
            big interest in philosophy. Beyond taking a semester or two worth of it, I frequently read the works of philosphers
            such as Descartes and Wittgenstein. </p>

          <p>I also took a couple of community college courses while I was still in high School.
          I completed courses on microeconomics, macroeconomics, and atmospheric science. I selected these because they were always
          fascinations of mine. I decided to take the economics courses because I wanted to be more informed about politics. During
          the elections of 2012, I remember thinking of how there had to be an absolute answer to questions rather than just
          a 1000 opinions, as politicians seem to give. Now I know there probably isn't an abolsute answer to questions like
          these. The atmospheric science course was the result of a lifelong fascination with the weather. The amount of energy
          being exchanged in atmospheric processes is enormous. Unlike as in many of the hard sciences, this is a phenomenon
          that can be seen and felt in ordinary life. Despite the extreme computational power of the latest generations of computers,
          chaotic phenomena like the weather remain difficult to predict. I'm pretty sure I went outside during every major storm
          I ever experienced, from tropical cyclones to blizzards. I've always wanted to experience a hurricane, but I've never been
          lucky (or perhaps unlucky), despite spending many childhood summers in Florida.
            </p>
        </div>
      </html>
    );



  }
  componentDidMount() {
    $("#heducation").click(function () {
      document.getElementById("contentB").scrollIntoView();
    });
  }
}



export default Education;
