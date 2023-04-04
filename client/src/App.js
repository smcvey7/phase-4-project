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


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [activities, setActivities]= useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    Promise.all([
      fetch('/me'),
      fetch('/activities')
    ])
    .then(([resMe, resActivities])=>
      Promise.all([resMe.json(), resActivities.json()])
    )
    .then(([dataMe, dataActivities])=>{
      if (dataMe.ok){
        dataMe.json().then((user)=>setCurrentUser(user))
      }
      setActivities(dataActivities)
      console.log(currentUser, activities)
    })

  }, [])

  function onLogout(){
    fetch('/logout', {method: "DELETE"}).then((r)=>{
      if (r.ok){
        navigate('/')
        setCurrentUser(null)
      }
    })
  }

  function onLogin(user){
    setCurrentUser(user)
  }

  return (
    <div id='app'>
      <div id='heading' className='flexContainer horizontal'>
        <div id='title' className='flexContainer vertical'>
          <h1 className='headerMargin'>Scamps</h1>
          <h3 className='headerMargin'>Salem Camps</h3>
        </div>
        <Welcome currentUser={currentUser} onLogout={onLogout} />
      </div>
      <NavBar/>
      <div id='body'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/discovery" element={<Discovery/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<LoginSignUp onLogin={onLogin} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/registrations' element={<Registrations activities={activities} currentUser={currentUser} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
