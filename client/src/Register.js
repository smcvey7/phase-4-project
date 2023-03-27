import React, {useState} from "react";

function Register(){
  const [userInfo, setUserInfo] = useState(
    {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: ""

    }
  )

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


  }
  
  return(
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        username: <input name="username" value={userInfo.username} onChange={handleChange} /><br/>
        password: <input type="password" name="password" value={userInfo.password} onChange={handleChange} /><br/>
        first name: <input name="first_name" value={userInfo.first_name} onChange={handleChange} /><br/>
        last name: <input name="last_name" value={userInfo.last_name} onChange={handleChange} /><br/>
        phone number: <input name="phone" value={userInfo.phone} onChange={handleChange} /><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Register