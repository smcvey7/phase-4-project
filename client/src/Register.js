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
  const [isLoading, setIsLoading]=useState(false)
  const [errors, setErrors]=useState(null)
  const navigate = useNavigate()

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

  function handleChange(e){
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    createUser()
  }

  function createUser(){
    setIsLoading(true)
    fetch('/campers', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then((r)=>{
      if (r.ok){
        resetUserInfo()
        navigate("/login")
      }else{
        r.json().then((error_list)=>setErrors(error_list.errors))
            }
    })
    setIsLoading(false)
  }
  
  return(
    <div>
      <h2>Register</h2>
      <div className="flexContainer horizontal spaceAround">
        <form onSubmit={handleSubmit}>
          Username:<br/><input name="username" autoComplete="username" value={userInfo.username} onChange={handleChange} /><br/>
          Password:<br/><input type="password" autoComplete="new-password" name="password" value={userInfo.password} onChange={handleChange} /><br/>
          Confirm password:<br/><input type="password" autoComplete="new-password" name="password_confirmation" value={userInfo.password_confirmation} onChange={handleChange} /><br/>
          Child first name:<br/><input name="first_name" value={userInfo.first_name} onChange={handleChange} /><br/>
          Child last name:<br/><input name="last_name" value={userInfo.last_name} onChange={handleChange} /><br/>
          Age:<br/><input type="number" min="5" max="10" name="age" value={userInfo.age} onChange={handleChange} /><br/>
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </form>
        {errors ? <ul className="errors">
        {errors.map((error)=><li key={error}>{error}</li>)}
      </ul> : <ul/>}
      </div>
    </div>
  )
}

export default Register