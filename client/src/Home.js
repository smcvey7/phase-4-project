
import React from "react";
import { NavLink } from "react-router-dom";

function Home(){
  return(
    <div id="home" className="flexContainer vertical">
      <h2>CAMPS & CLASSES</h2>
      <div className="flexContainer horizontal spaceAround">
        <div>
          <h2>*sports image*</h2>
          <h2>SPORT CAMPS</h2>
          <NavLink to="/sports">Learn more</NavLink>
        </div>
        <div>
          <h2>*discovery image*</h2>
          <h2>DISCOVERY CAMPS</h2>
          <NavLink to="/discovery">Learn more</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home