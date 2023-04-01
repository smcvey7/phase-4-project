import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginSignUp({ onLogin }){
  const [hasAccount, setHasAccount] = useState(true)
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  })
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
    fetch('/login', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then((r)=>r.json())
    .then((user)=>onLogin(user))

    resetUserData()
    navigate("/")
  }

  function handleNewAccount(e){
    e.preventDefault()
    console.log("creating account", userInfo)
    resetUserData()
    setHasAccount(true)
  }

  return (
    <div className="login">
      <div id="login-signup">
        <Link className="tab" onClick={()=>setHasAccount(true)}>Log in</Link>
        <Link className="tab" onClick={()=>setHasAccount(false)}>Sign up</Link>
      </div>
      {hasAccount ?
        <div>
          <h3>Log in</h3>
          <form onSubmit={handleLogin} >
            Username:<br/><input autoComplete="username" autocapitalize="none" name="username" value={userInfo.username} onChange={handleChange} ></input><br/>
            Password:<br/><input autoComplete="current-password" type="password" name="password" value={userInfo.password} onChange={handleChange} /><br/>
            <input type="submit" />
          </form>
        </div>
        :
        <div>
          <h3>Sign up</h3>
          <form onSubmit={handleNewAccount}>
            Username: <input autoComplete="username" name="username" value={userInfo.username} onChange={handleChange} ></input><br/>
            Password: <input autoComplete="current-password" type="password" name="password" value={userInfo.password} onChange={handleChange} /><br/>
            <input type="submit" />
          </form>
        </div>
      }
    </div>
  )
}

export default LoginSignUp