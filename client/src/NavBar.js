import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import MyContext from './MyContext';

function NavBar(){
  const {camper} = useContext(MyContext)
  
  return(
    camper && camper.admin ? 
    <div id='navBar' className='flexContainer horizontal navbar spaceAround'>
      <NavLink className="navLinks" to="/message-list" >Messages</NavLink>
      <NavLink className="navLinks" to="/camper-registrations" >Registrations</NavLink>
    </div> :
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
