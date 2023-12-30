import React from "react"
import "./aboutMe.css";
import jordan from './images/jordan.jpeg';

export default function AboutMe() {
  return (
    <section id="aboutMe">
      <div class="holder">
        <div class="ellipse"></div>
        <div class="ellipse ellipse2"></div>
      </div>
      <div className="splitScreen" style={fullBackground}>

        <div className="jordanPic">
          <img src={jordan}></img>
        </div>
        
          
         <div className="aboutMeText">
            <h1>About Me</h1>
            <p className="introText">
              I'm an illustrator and graphic designer originally from Melbourne, Australia. Since 2013, I have lived in Brooklyn NY which has had a significant influence on my identity as a visual artist.
              <p></p>
              I spend a good portion of my time roaming around Prospect Park and scavenging through graphic novels at Desert Island Comics. 
              <p></p>
              I am very interested in the convergence of illustration with design and motion. The majority of my work process starts with an initial illustration which develops into a design or motion project.
            </p>
         </div>
          
      </div>
        <div class="holder">
          <div class="ellipse"></div>
          <div class="ellipse ellipse2"></div>
        </div>
    </section>
  )
}

const fullBackground = {
    width: "100vw",
    whiteSpace: "pre-wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    justifyContent: "space-around"
}

