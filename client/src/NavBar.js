import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(){
  return(
    <div id='navBar' className='flexContainer horizontal navbar spaceAround'>
        <NavLink className="navLinks" to="/" >Home</NavLink>
        <div className='dropdown'>
          <button className='dropbtn'>Ages 5-7
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <a className="navLinks" href="/sports#sportsLittles" >Sports</a>
            <a className="navLinks" href="/discovery#discoveryLittles" >Discovery</a>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>Ages 8-10
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <a className="navLinks" href="/sports#sportsBigs" >Sports</a>
            <a className="navLinks" href="/discovery#discoveryBigs" >Discovery</a>
          </div>
        </div>
        <NavLink className="navLinks" to="/contact" >Contact</NavLink>
    </div>
  )
}


export default NavBar;
