import React from "react"
import "./styles.css"
import Axios from "axios"


export const About: React.FC = () =>{
  const [paragraph,setParagraph] = React.useState("marvin") 
  React.useEffect(()=>{
    Axios.get("https://mias-cv.herokuapp.com/").then(()=>{console.log("lelele")})
  }, [])

  return (
    <>

   
      <div className="about-section">

        <div className="about-card">


            <div className="left-column">
                <h2>About me</h2>
                {paragraph}
              </div>

       
          
          <div className="right-column">
           
            <img src={require("./1.jpg")} width="212px" className="bild1"/>
            <img src={require("./2.jpg")} width="215px" className="bild1"/>
            <img src={require("./3.jpg")} width="330px" className="bild3"/>
          

          </div>

        </div>



      </div>



    </>

    
    )
}