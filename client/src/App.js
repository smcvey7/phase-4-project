import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import LoginSignUp from './LoginSignUp';
import Contact from './Contact';
import Welcome from './Welcome';
import Register from './Register';
import Sports from './Sports';
import Discovery from './Discovery';
import Registrations from './Registrations';
import MessageList from './MessageList';
import CamperRegistrations from './CamperRegistrations';

function App() {
  const [camper, setCamper] = useState(null)
  const [activities, setActivities]= useState(null)
  const navigate = useNavigate()
  // auto-login
  useEffect(()=>{
    const path = window.location.pathname
    fetch('/me')
    .then((r)=>{
      if (r.ok){
        r.json()
        .then((user)=>{
          setCamper(user)
          navigate(path)
        })
      }
    })
  }, [navigate])
  // fetch activities
  useEffect(()=>{
    fetch('/activities')
    .then((r)=>r.json())
    .then((data)=>setActivities(data))
  }, [])
// delete session[:camper_id]
  function onLogout(){
    fetch('/logout', {method: "DELETE"}).then((r)=>{
      if (r.ok){
        navigate('/')
        setCamper(null)
      }
    })
  }
// set state with user info
  function onLogin(user){
    setCamper(user)
  }
// update user state after changing registrations
  function updateActivities(data){
    setCamper({
      ...camper,
      activities: data
    })
  }

  return (
    <div id='app'>
      <div id='heading' className='flexContainer horizontal spaceBetween'>
        <div id='title' className='flexContainer vertical'>
          <h1 id='siteName' className='headerMargin'>SCAMPS</h1>
          <h3 className='headerMargin'>Salem Camps</h3>
        </div>
        <Welcome camper={camper} onLogout={onLogout} />
      </div>
      <NavBar camper={camper} />
      <div id='body'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/discovery" element={<Discovery/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<LoginSignUp onLogin={onLogin} />} />
        <Route path='/register' element={<Register setCamper={setCamper} />} />
        <Route path='/registrations' element={<Registrations activities={activities} camper={camper} updateActivities={updateActivities}/>} />
        <Route path='/message-list' element={<MessageList camper={camper} />} />
        <Route path='/camper-registrations' element={<CamperRegistrations activities={activities} camper={camper}/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
