import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Register(){
  const [userInfo, setUserInfo] = useState({
      username: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      age: 5
    })

  function resetUserInfo(){
    setUserInfo({
      username: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      age: 5
    })
  }

  const navigate = useNavigate()

  function handleChange(e){
    console.log(e.target)
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
    console.log(userInfo)
  }

  function handleSubmit(e){
    e.preventDefault()
    createUser()
  }

  function createUser(){
    fetch('/campers', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then((r)=>r.json())
    .then((user)=>onLogin(user))

    resetUserInfo()
    navigate("/login")
  }

  function onLogin(user){
    console.log(user, "logged in")
  }
  
  return(
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        Username:<br/><input name="username" value={userInfo.username} onChange={handleChange} /><br/>
        Password:<br/><input type="password" name="password" value={userInfo.password} onChange={handleChange} /><br/>
        Confirm password:<br/><input type="password" name="password_confirmation" value={userInfo.password_confirmation} onChange={handleChange} /><br/>
        Child first name:<br/><input name="first_name" value={userInfo.first_name} onChange={handleChange} /><br/>
        Child last name:<br/><input name="last_name" value={userInfo.last_name} onChange={handleChange} /><br/>
        Age:<br/><input type="number" min="5" max="10" name="age" value={userInfo.age} onChange={handleChange} /><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Register