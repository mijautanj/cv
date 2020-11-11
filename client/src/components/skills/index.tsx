import React from "react"
import "./styles.css"


export const Skills: React.FC = () =>{
  return (
    <>
   
      <div className="skills-section">

        <div className="skills-card">
        <h2>Soft Skills</h2>
        <p>Team player, creative, positive, problem solver, strong communication skills, committed, logical, goal oriented,
         empathetic, considerate, structured, perservant.</p>

        <h2>Hard Skills</h2>

          <div className="intro-text">
                <h3>Programming skills</h3>
                <p>In my education I've mostly used Python and Matlab for mathematical computations and Machine Learning algorithms. 
                  In my latest internship I've had the great oppertunity to learn about web development using React and Node.js 
                  and collaborating together using GIT.
                </p>
            </div>

            <div className="prog-list">

            <img src={require("./python.png")} className="python-pic"/>
              <div className="python">
                  <h4>Python</h4>
                  <p>Advanced</p>
              </div>

              <img src={require("./matlab.png")} className="matlab-pic"/>
              <div className="matlab">
                  <h4>Matlab</h4>
                  <p>Intermediate</p>
                  
              </div>
   
              <img src={require("./react.png")} className="react-pic"/>

              <div className="react">
                <h4>React</h4>
                <p>Beginner</p>
              </div>

              <img src={require("./node.png")} className="node-pic"/>

              <div className="node">
                <h4>Node.js</h4>
                <p>Beginner</p>  
              </div>

            
       
          
            </div>
           
            <div className="intro-text">
                <h3>Languages</h3>
                <p>I grew up in a family where polish and russian was spoken in one household. 
                  Growing up in Sweden I was mixing all three languages during my first years.
                  Since then I've had a great interest in languages and studied spanish which I used a lot traveling through South America.
                </p>
            </div>

            
            <div className="language-list">

            <img src={require("./sweden.png")} className="sweden-pic"/>

              <div className="sweden">
                  <h4>Swedish</h4>
                  <p>Native</p>                
              </div>
          
              <img src={require("./gb.png")} className="gb-pic"/>

              <div className="gb">
                  <h4>English</h4>
                  <p>Fluent</p>
                  
              </div>

              <img src={require("./spain.png")} className="spain-pic"/>

              <div className="spain">
                <h4>Spanish</h4>
                <p>Conversational</p>
              </div>

              <img src={require("./poland.png")} className="poland-pic"/>

              <div className="poland">
                <h4>Polish</h4>
                <p>Conversational</p>
              </div>
   
              <img src={require("./russia.png")} className="russia-pic"/>

              <div className="russia">
                <h4>Russian</h4>
                <p>Conversational</p>  
              </div>

            </div>
            
 

        </div>



      </div>



    </>

    
    )
}