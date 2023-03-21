import React, {useState} from "react";
import { Link } from "react-router-dom";

function LoginSignUp(){
  const [hasAccount, setHasAccount] = useState(true)
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  })

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
    console.log("logging in", userInfo)
  }

  function handleNewAccount(e){
    e.preventDefault()
    console.log("creating account", userInfo)

  }

  return (
    <div>
      <div className="flex-container horizontal">
        <Link onClick={()=>setHasAccount(true)}>Log in</Link>
        <Link onClick={()=>setHasAccount(false)}>Sign up</Link>
      </div>
      {hasAccount ?
        <div>
          <h3>Log in</h3>
          <form onSubmit={handleLogin} >
            Username: <input autoComplete="username" name="username" value={userInfo.username} onChange={handleChange} ></input>
            Password: <input autoComplete="current-password" type="password" name="password" value={userInfo.password} onChange={handleChange} />
            <input type="submit" />
          </form>
        </div>
        :
        <div>
          <h3>Sign up</h3>
          <form onSubmit={handleNewAccount}>
            Username: <input autoComplete="username" name="username" value={userInfo.username} onChange={handleChange} ></input>
            Password: <input autoComplete="current-password" type="password" name="password" value={userInfo.password} onChange={handleChange} />
            <input type="submit" />
          </form>
        </div>
      }
    </div>
  )
}

export default LoginSignUp