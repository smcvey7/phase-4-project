import React from "react";
import { NavLink } from "react-router-dom";

function Welcome({ currentUser, onLogout }){
  console.log(currentUser)
  return(
    <div>
      <div></div>
      {currentUser ?
        <div className="flexContainer vertical spaceBetween contentRight">
          <em>Welcome, {currentUser.first_name} </em><NavLink to="/" onClick={()=>onLogout()}>Log out</NavLink><br/>
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