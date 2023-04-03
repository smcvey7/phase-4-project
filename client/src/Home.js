
import React from "react";
import { NavLink } from "react-router-dom";

function Home(){
  return(
    <div id="home" className="flexContainer vertical">
      <h2>CAMPS & CLASSES</h2>
      <div className="flexContainer horizontal spaceAround">
        <div>
          <h2>SPORT CAMPS</h2>
          <img src="./img/soccer_5_7.jpeg" alt="sports camps" width="400px" height="230px" /><br/>
          <NavLink to="/sports">Learn more</NavLink>
        </div>
        <div>
          <h2>DISCOVERY CAMPS</h2>
          <img src="./img/science_5_7_3.jpeg" alt="discovery camps" width="400px" height="230px" /><br/>
          <NavLink to="/discovery">Learn more</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home