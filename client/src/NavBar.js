import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(){
  return(
    <div id='navBar' className='flexContainer horizontal navbar'>
        <NavLink className="navLinks" to="/" >Home</NavLink>
        <div className='dropdown'>
          <button className='dropbtn'>Ages 5-7
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <NavLink className="navLinks" to="/sports" >Sports</NavLink>
            <NavLink className="navLinks" to="/discovery" >Discovery</NavLink>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>Ages 8-10
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <NavLink className="navLinks" to="/sports" >Sports</NavLink>
            <NavLink className="navLinks" to="/discovery" >Discovery</NavLink>
          </div>
        </div>
        <NavLink className="navLinks" to="/contact" >Contact</NavLink>
    </div>
  )
}


export default NavBar;
