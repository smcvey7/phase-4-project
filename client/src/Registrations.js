import React, {useState} from "react";

function Registrations({currentUser}){

  const [formData, setFormData] = useState(currentUser ? {} : null)

  return(
    currentUser ? 
    <div id="registrations">
      <h2>{currentUser.first_name}'s Registrations (age: {currentUser.age})</h2>

      <form>
        {currentUser.age < 8 ? 
        <h3>5-7 year old activities</h3>:
        <h3>8-10 year old activities</h3>
        }

      </form>
    </div> :
    <></>
  )
}

export default Registrations