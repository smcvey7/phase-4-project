import React, {useState} from "react";
import { Link } from "react-router-dom";

function LoginSignUp({}){
  const [hasAccount, setHasAccount] = useState(true)

  return (
    <div>
      <div className="flex-container horizontal">
        <Link onClick={()=>setHasAccount(true)}>Log in</Link>
        <Link onClick={()=>setHasAccount(false)}>Sign up</Link>
      </div>
      {hasAccount ?
        <div>
          <h3>Log in</h3>
          <form>
            Username: <input autoComplete="username"></input>
            Password: <input autoComplete="current-password" type="password" />
            <input type="submit" />
          </form>
        </div>
        :
        <div>
          <h3>Sign up</h3>
          <form>
            Username: <input autoComplete="username"></input>
            Password: <input autoComplete="current-password" type="password" />
            <input type="submit" />
          </form>
        </div>
      }
    </div>
  )
}

export default LoginSignUp