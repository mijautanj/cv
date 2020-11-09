import React from "react"
import "./styles.css"


export const Experience: React.FC = () =>{
  return (
    <>
      <div className="experience-section">

        <div className="experience-card">

          <div className="intro-text">
                <h2>My experience</h2>
                <p>I've had amazing oppertunities working at well established high tech companies, both internships and part-time positions alongside with my studies.
                  I've learnt all from how engineering teams work together in an agile way, to gaining hands on experience on solving technical issues.
                </p>
                <p>Here is <a href="./CV - Mia Zdybek.pdf" download>My CV</a>.</p>
            </div>

            <div className="experience-list">

              <div className="svea1">
                  <h4>Svea Solar - Developer intern</h4>
                  <p>Fullstack development of internal support website alongside with technical support of solar cell monitoring app.</p>
                  
              </div>
              <img src={require("./svea-solar.png")} className="svea-pic"/>

              <div className="svea2">
                  <h4>Svea Solar - Engineering intern</h4>
                  <p>Project coordination and technical support of solar cell installations.</p>
                  
              </div>
              <img src={require("./svea-solar.png")} className="svea-pic"/>
              
              <div className="fortum">
                <h4>Fortum - Engineering intern</h4>
                <p>Administration and operation maintenance of EV-chargers and their cloud-based charging service.</p>
              </div>
              <img src={require("./fortum.png")} className="fortum-pic"/>

              <div className="ericsson">
                <h4>Ericsson - Data Administration</h4>
                <p>Registration and control of optical fibre data in internal systems.</p>  
              </div>
              <img src={require("./ericsson2.png")} className="ericsson-pic"/>

        
       
          
            </div>
           
            
   

        </div>



      </div>


    </>

    
    )
}