import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar( {currentUser, setCurrentUser} ){
  return(
    <div id='navBar' className='flexContainer'>
      <NavLink className="navLinks" to="/" >Home</NavLink>
      <NavLink className="navLinks" to="/1" >Read</NavLink>
      <NavLink className="navLinks" to="/2" >Watch</NavLink>
      <NavLink className="navLinks" to="/3" >Listen</NavLink>
      {/* {currentUser ? <NavLink className='navLinks' to="/login" onClick={()=>setCurrentUser(null)}>Log out</NavLink> : <NavLink className="navLinks" to="/login" >Login</NavLink>} */}
    </div>
  )
}


export default NavBar;