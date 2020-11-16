import React from "react"
import "./styles.css"


export const Education: React.FC = () =>{
  return (
    <>
   
      <div className="education-section">

        <div className="education-card">

          <div className="intro-text">
                <h2>My academic history</h2>
                <p>Most of my studies took place at KTH which has world top ranked engineering educations. At KTH I've learnt to be persistent,
                  to have many things on my plate and manage complicated problem solving on strict deadlines.
                </p>
            </div>

            <div className="education-list">

            <img src={require("./kth2.jpg")} className="kth-pic"/>
              <div className="kth1">
                  <h4>Royal Institute of Technology (KTH) - M.Sc. Machine Learning</h4>
                  <p>Attended courses such as  "Deep Learning in Data Science", "Artificial Neural Networks and Deep Architectures", 
                    "Artificial Intelligence", "Advanced Machine Learning" and "Reinforcement Learning".</p>
                  
              </div>
              
              <img src={require("./kth2.jpg")} className="kth-pic"/>
              <div className="kth2">
                  <h4>Royal Institute of Technology (KTH) - B.Sc. Engineering Physics</h4>
                  <p>Attended courses such as "Probability Theory and Statistics", "Applied Computer Science", "Calculus in Several Variables",
                     "Numerical Methods", "Differential Equations and Transforms" and "Algebra and Geometry". </p>
                  
              </div>
             
              <img src={require("./enskilda3.png")} className="enskilda-pic"/>
              <div className="enskilda">
                <h4>University College Stockholm - Human Rights</h4>
                <p> "Racism and discrimination".</p>
              </div>

            </div>
        </div>



      </div>



    </>

    
    )
}