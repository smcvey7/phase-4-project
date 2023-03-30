import React from "react";
import { NavLink } from "react-router-dom";

function Welcome({ currentUser, onLogout }){
  console.log(currentUser)
  return(
    <div>
      {currentUser ?
        <div>
          <em>Welcome, {currentUser.first_name} </em><br/>
          <NavLink to='/registrations'>My registrations</NavLink><br/>
          <NavLink to="/" onClick={()=>onLogout()}>Log out</NavLink>
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