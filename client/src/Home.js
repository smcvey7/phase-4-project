
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()

  return(
    <div id="home" className="flexContainer vertical">
      <h2>CAMPS & CLASSES</h2>
      <div className="flexContainer horizontal spaceAround">
        <div className="activityBox">
          <h2>SPORT CAMPS</h2>
          <img src="./img/soccer_5_7.jpeg" alt="sports camps" onClick={()=>navigate('/sports')} /><br/>
        </div>
        <div className="activityBox">
          <h2>DISCOVERY CAMPS</h2>
          <img src="./img/science_5_7_3.jpeg" alt="discovery camps" onClick={()=>navigate('/discovery')} /><br/>
        </div>
      </div>
    </div>
  )
}

export default Home