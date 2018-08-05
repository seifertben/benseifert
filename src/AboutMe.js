import React, { Component } from 'react';
import logo from './logo.svg';
import './AboutMe.css';
import $ from 'jquery'
import pdf from './resources/SeifertResume.pdf'


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
          <p>Hi there! I'm a student at Brown University studying physics and computer science, my two
            primary interests. I'm orginally from the Appalachian foothills of Mayland, but spend most of
            my time now in New England. Feel free to scroll through this site to learn a little bit more about me
            and my work. You can also find my <a href={pdf} target="_blank">resume</a> attached at the top. 
            When I'm not solving physics problems or coding on my laptop, I might be hiking
            in the white mountains or travelling to foreign countries. My travel has brought me to places
            as far flung as Morocco and Australia. I'm always seeking adventure. During the summer of 2017, I travelled
            to South Carolina to chase the solar eclipse only to have it be obscured by a cloud at the last second.
            I guess I'll have to wait until 2024 for my next chance. There is beauty to be found in so many places, from the 
            physics of particles to the world's variety of cultures. I intend to see as much of it as possible.
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
