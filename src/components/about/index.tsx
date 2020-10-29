import React from "react"
import "./styles.css"


export const About: React.FC = () =>{
  return (
    <>

    
    
   
      <div className="about-container">

        <div className="intro-wrapper">


          <div id="preview-shadow">
            <div className="left-column">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
                <div id="corner-br" className="corner"></div>
                <h3>Who am I?</h3>
                <p>I am styding my last year in the Machine Learning master at KTH and working as a web developer intern at Svea Solar!</p>
              </div>

          </div>
          
          </div>

          <div className="right-column">
          <img src={ require('../../../images/mia-bild.jpg')} width="100" height="100" />
          <h5>Student at KTH (Master's programme in Machine Learing)</h5>
          </div>

        </div>



      </div>



    </>

    
    )
}