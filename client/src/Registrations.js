import React, {useState} from "react";

function Registrations({currentUser}){

  const [formData, setFormData] = useState({
    time1: "none",
    time2: "none",
    time3: "none",
    time4: "none"
    }
  )

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return(
    currentUser ? 
    <div id="registrations">
      <h2>{currentUser.first_name}'s Registrations (age: {currentUser.age})</h2>
      <ul>
        
      </ul>
      <form>
        6/5-16:
          <select name="time1" value={formData.time1} defaultValue="none" onChange={handleChange}>
            <option value="none">None</option>
            <option value="basicSkillsLittles">Basic Skills</option>
            <option value="soccerLittles">Soccer</option>
            <option value="baseballLittles">Baseball</option>
            <option value="trackLittles">Track</option>
          </select><br/>
        6/19-30:
        <select name="time2" value={formData.time2} defaultValue="none" onChange={handleChange}>
            <option value="none">None</option>
            <option value="basicSkillsLittles">Basic Skills</option>
            <option value="soccerLittles">Soccer</option>
            <option value="baseballLittles">Baseball</option>
            <option value="trackLittles">Track</option>
          </select><br/>
        7/3-14:
        <select name="time3" value={formData.time3} defaultValue="none" onChange={handleChange}>
            <option value="none">None</option>
            <option value="basicSkillsLittles">Basic Skills</option>
            <option value="soccerLittles">Soccer</option>
            <option value="baseballLittles">Baseball</option>
            <option value="trackLittles">Track</option>
          </select><br/>
        7/17-28:
        <select name="time4" value={formData.time4} defaultValue="none" onChange={handleChange}>
            <option value="none">None</option>
            <option value="basicSkillsLittles">Basic Skills</option>
            <option value="soccerLittles">Soccer</option>
            <option value="baseballLittles">Baseball</option>
            <option value="trackLittles">Track</option>
          </select><br/>
      </form>
    </div> :
    <></>
  )
}

export default Registrations