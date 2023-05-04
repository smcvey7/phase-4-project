
import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()

  return(
    <div id="home" className="flexContainer vertical">
      <h2>CAMPS & CLASSES</h2>
      <div className="flexContainer horizontal spaceAround">
        <div className="activityBox">
          <h2>SPORT CAMPS</h2>
          <div className="container">
            <img src="./img/soccer_5_7.jpeg" alt="sports camps"  className="image"/>
            <div className="overlay" onClick={()=>navigate('/sports')}>
              <div className="text" onClick={()=>navigate('/sports')}>LEARN MORE</div>
            </div>
          </div>
        </div>
        <div className="activityBox">
          <h2>DISCOVERY CAMPS</h2>
          <div className="container">
            <img src="./img/science_5_7_3.jpeg" alt="discovery camps"  className="image"/>
            <div className="overlay" onClick={()=>navigate('/discovery')}>
              <div className="text" >LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home