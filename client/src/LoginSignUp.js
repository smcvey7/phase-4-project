import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./MyContext";

function LoginSignUp(){
  const {setCamper} = useContext(MyContext)

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

  // set state with user info
  function onLogin(user){
    setCamper(user)
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
      setIsLoading(false)
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
      setIsLoading(false)
      if (r.ok){
        r.json().then((user)=>{
          onLogin(user)
          resetUserData()
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
      <h3>Log in</h3>
      <div className="flexContainer horizontal spaceAround">
        <form id="form" onSubmit={handleLogin} >
          Username:<br/><input autoComplete="username" autoCapitalize="none" name="username" value={userInfo.username} onChange={handleChange} ></input><br/>
          Password:<br/><input autoComplete="current-password" type="password" name="password" value={userInfo.password} onChange={handleChange} /><br/>
          <button type="submit" >{isLoading ? "Loading..." : "Submit"}</button>
        </form>
        <div className="errors">
          {errors ? <ul><li>{errors}</li></ul> : <div/>}
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp