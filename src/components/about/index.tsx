import React from "react"
import "./styles.css"


export const About: React.FC = () =>{
  return (
    <>

   
      <div className="about-section">

        <div className="about-card">


            <div className="left-column">
                <h2>About me</h2>
                <p>Hello and welcome to whoever is reading this! I'm Mia, a 24-year old master student at The Royale Institute of Technology (KTH), Stockholm. 
                  I have a B.Sc. in Engineering Physics and am currently in my senior year of M.Sc. in Machine Learning. 
                  In addition to that I'm working part-time as a web developer intern at Svea Solar learning all about React and Node.js.</p>
                <p>In my spare time you'll either find me at the gym or outside training. I love hiking, being out in nature and spending time in the sun. 
                  I am environmentally conscious, a (vegan) foodie and (red) wine lover!</p>
                <p>I am a positive but hard worker who believes that a great team can overcome any obstacles put in front of them!</p>
              </div>

       
          
          <div className="right-column">
           
            <img src={require("./1.jpg")} width="212px" className="bild1"/>
            <img src={require("./2.jpg")} width="215px" className="bild1"/>
            <img src={require("./3.jpg")} width="330px"/>
          

          </div>

        </div>



      </div>



    </>

    
    )
}