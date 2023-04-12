import React from "react";
import { NavLink } from "react-router-dom";

function Welcome({ camper, onLogout }){
  return(
    <div id="welcome">
      {camper ?
        <div className="flexContainer vertical spaceBetween contentRight">
          <em>Welcome, <strong>{camper.first_name}</strong></em><NavLink to="/" onClick={()=>onLogout()}>Log out</NavLink><br/>
          <NavLink to='/registrations'>My registrations</NavLink>
        </div>:
        <div>
          <NavLink className="welcomeLink" to="/login">Log in</NavLink>
          <NavLink className="welcomeLink" to="/register">Sign up</NavLink>
        </div>
        }
    </div>
  )
}

export default Welcome