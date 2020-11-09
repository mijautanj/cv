import React from "react"
import "./styles.css"



export const Header: React.FC = () =>{
  return (
    <>

    <div className="header">
        <div className="first-name">
            <img src={require("./m.svg")} height="320px" width="320px" className="m"/>
          <div className="ia">ia</div>  
        </div>

        <div className="profilepic">
            <div className="ball2"/>
            
            <div className="ball1"/>
            <img src={require("./photo.png")} className="photo"/>
        </div>

       <div className="surname">   
            <img src={require("./z.svg")} height="280px" width="280px" className="z"/>
            <div className="dybek">dybek</div>
        </div>  
    </div>

 
    </>

    
    )
}