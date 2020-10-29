import React from "react"
import "./styles.css"


export const Experience: React.FC = () =>{
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Montserrat&display=swap" rel="stylesheet"/>


    
    
    <section className="s1">
      <div className="main-conatiner">

        <div className="greeting-wrapper">
          <h1>Experience</h1>
          
        </div>

        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              
            </div> 

            <ul id="navigation">
              <li><a href="#">Contact </a></li>
            </ul>
            
           
          </div>

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
    </section>

    <section className="s2">
      <div className="main-conatiner">
      Portfolio
      </div>
    </section>

    <section className="s1">
      <div className="main-conatiner"></div>
      <h5>Mia Zdybek</h5>
      <p>This is a sentence</p> 
     </section>

    </>

    
    )
}