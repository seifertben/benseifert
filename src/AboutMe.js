import React, { Component } from 'react';
import logo from './logo.svg';
import './AboutMe.css';
import $ from 'jquery'


class AboutMe extends Component {
  render() {
    return (
      <html>
        <head>
          <link link rel="stylesheet" type="text/css" href={"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"} />
        </head>
        <div id="contentA">
          <h1 id="headerA" className="hvr-sweep-to-right animated slideInLeft delay-2s">Welcome to my site!</h1>
          <img className="animated slideInRight delay-2s" src={require('./resources/personal.jpg')} />
          <p>Hi there. I'm a student at Brown University studying physics and computer science, my two
            primary interests. Feel free to scroll through this site to learn a little bit more about me
            and my work. You can also find my resume attached at the top. 
            When I'm not solving physics problems or coding on my laptop, I might be hiking
            in the white mountains or travelling to foreign countries. My travel has brought me to places
            as far flung as Morocco and Australia. It's all an attempt to understand every aspect of the world
            around us, from subatomic particles to religion and culture.
             </p>
        </div>

      </html>
    );
  }
  componentDidMount() {
    $( "#headerA" ).click(function() {
      document.getElementById("contentA").scrollIntoView();
    });
  } 
}

export default AboutMe;
