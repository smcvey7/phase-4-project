import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MyContext from "./MyContext";

function Welcome(){
  const {camper, setCamper} = useContext(MyContext)
  const navigate = useNavigate()

  // delete session[:camper_id]
  function onLogout(){
    fetch('/logout', {method: "DELETE"}).then((r)=>{
      if (r.ok){
        console.log(r)
        navigate('/')
        setCamper(null)
      }else{
        console.log(r)
      }
    })
  }
  return(
    <div id="welcome">
      {camper ?
        <div className="flexContainer vertical spaceBetween contentRight">
          <em>Welcome, <strong>{camper.first_name}</strong></em><NavLink to="/" onClick={onLogout}>Log out</NavLink><br/>
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