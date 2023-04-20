import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Register({setCamper}){
  const [formData, setFormData] = useState({
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

  function resetFormData(){
    setFormData({
      username: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      age: 5
    })
  }

  function handleChange(e){
    setFormData({
      ...formData,
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
      body: JSON.stringify(formData)
    })
    .then((r)=>{
      if (r.ok){
        r.json().then((camper)=>setCamper(camper))
        resetFormData()
        navigate("/")
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
        <form id="form" onSubmit={handleSubmit}>
          Username:<br/><input name="username" autoComplete="username" value={formData.username} onChange={handleChange} /><br/>
          Password:<br/><input type="password" autoComplete="new-password" name="password" value={formData.password} onChange={handleChange} /><br/>
          Confirm password:<br/><input type="password" autoComplete="new-password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} /><br/>
          Child first name:<br/><input name="first_name" value={formData.first_name} onChange={handleChange} /><br/>
          Child last name:<br/><input name="last_name" value={formData.last_name} onChange={handleChange} /><br/>
          Age:<br/><input type="number" min="5" max="10" name="age" value={formData.age} onChange={handleChange} /><br/>
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </form>
        <div className="errors">
          {errors ?
            <ul>{errors.map((error)=><li key={error}>{error}</li>)}</ul> : null}
        </div>
      </div>
    </div>
  )
}

export default Register