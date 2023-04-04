import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginSignUp({ onLogin }){
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors]=useState(null)

  const [isLoading, setIsLoading]=useState(false)

  const navigate = useNavigate();

  function resetUserData(){
    setUserInfo(
      {
        username: "",
        password: ""
      }
    )
  }

  function handleChange(e){
    setUserInfo(
      {
        ...userInfo,
        [e.target.name]: e.target.value
      }
    )
  }

  function handleLogin(e){
    e.preventDefault()
    setIsLoading(true)
    if (userInfo.username === "" || userInfo.password === ""){
      setErrors("username/password cannot be blank")
      return null
    }
    fetch('/login', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then((r)=>{
      if (r.ok){
        r.json().then((user)=>{
          onLogin(user)
          resetUserData()
          setIsLoading(false)
          navigate("/")
        })
      }else{
        r.json().then((error_list)=>{
          setErrors(error_list.error)
        })
            }
    })
  }

  return (
    <div className="login">
      <div>
        <h3>Log in</h3>
        {errors ? <ul><li className="errors">{errors}</li></ul> : <div/>}
        <form onSubmit={handleLogin} >
          Username:<br/><input autoComplete="username" autoCapitalize="none" name="username" value={userInfo.username} onChange={handleChange} ></input><br/>
          Password:<br/><input autoComplete="current-password" type="password" name="password" value={userInfo.password} onChange={handleChange} /><br/>
          <button type="submit" >{isLoading ? "Loading..." : "Submit"}</button>
        </form>
      </div>
    </div>
  )
}

export default LoginSignUp