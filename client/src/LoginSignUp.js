import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginSignUp({ onLogin }){
  const [hasAccount, setHasAccount] = useState(true)
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors]=useState([])

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
          navigate("/")
        })
      }else{
        r.json().then((error_list)=>{
          setErrors(error_list.error)
          console.log(error_list.error)
        })
            }
    })
  }

  function handleNewAccount(e){
    e.preventDefault()
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
          <ul><li className="errors">{errors}</li></ul>
          <form onSubmit={handleLogin} >
            Username:<br/><input autoComplete="username" autoCapitalize="none" name="username" value={userInfo.username} onChange={handleChange} ></input><br/>
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