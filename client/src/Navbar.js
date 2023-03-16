import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar( {currentUser, setCurrentUser} ){
  return(
    <div id='navBar' className='flexContainer'>
      <NavLink className="navLinks" to="/" exact>Home</NavLink>
      <NavLink className="navLinks" to="/1" exact>Read</NavLink>
      <NavLink className="navLinks" to="/2" exact>Watch</NavLink>
      <NavLink className="navLinks" to="/3" exact>Listen</NavLink>
      {currentUser ? <NavLink className='navLinks' to="/login" onClick={()=>setCurrentUser(null)}>Log out</NavLink> : <NavLink className="navLinks" to="/login" exact>Login</NavLink>}
    </div>
  )
}

export default NavBar