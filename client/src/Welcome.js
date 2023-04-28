import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import MyContext from "./MyContext";

function Welcome({ onLogout }){
  const {camper} = useContext(MyContext)
  return(
    <div id="welcome">
      {camper ?
        <div className="flexContainer vertical spaceBetween contentRight">
          <em>Welcome, <strong>{camper.first_name}</strong></em><NavLink to="/" onClick={()=>onLogout()}>Log out</NavLink><br/>
          {camper.admin ? null : <NavLink to='/registrations'>My registrations</NavLink>}
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