import React, {useState} from "react";

function Registrations({currentUser}){

  // const [formData, setFormData] = useState(currentUser ? currentUser.registrations : {
  //   time1: "none",
  //   time2: "none",
  //   time3: "none",
  //   time4: "none"
  //   }
  // )

  const [formData, setFormData] = useState({
    time1: "none",
    time2: "none",
    time3: "none",
    time4: "none"
    }
  )

  function handleChange(e){
    // const activities = [false, false, false, false, false, false]
    // console.log(activities[parseInt(e.target.getAttribute("activity"))])
    // activities[parseInt(e.target.getAttribute("activity"))]=e.target.checked
    // setFormData({
    //   ...formData,
    //   [e.target.getAttribute("time")]: activities
    // })
   

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

     console.log(formData)
  }

  return(
    currentUser ? 
    <div id="registrations">
      <h2>{currentUser.first_name}'s Registrations (age: {currentUser.age})</h2>
      <ul>

      </ul>
      {/* <form>
        {currentUser.age < 8 ? 
          <div>
            <h3>5-7 year old activities</h3>
            <div className="flexContainer horizontal spaceAround">
              <div>
                <h4>Sports</h4>
                <strong>Basic skills</strong><br/>
                  <input type="checkbox" time="time1" activity="0" checked={formData.time1[0]} onChange={handleChange} />6/5-16
                  <input type="checkbox" time="time2" activity="0" checked={formData.time2[0]} onChange={handleChange} />6/19-30
                  <input type="checkbox" time="time3" activity="0" checked={formData.time3[0]} onChange={handleChange} />7/3-14
                  <input type="checkbox" time="time4" activity="0" checked={formData.time4[0]} onChange={handleChange} />7/17-28<br/>
                  <strong>Track</strong><br/>
                  <input type="checkbox" time="time1" activity="1" checked={formData.time1[1]} onChange={handleChange} />6/5-16
                  <input type="checkbox" time="time2" activity="1" checked={formData.time2[1]} onChange={handleChange} />6/19-30
                  <input type="checkbox" time="time3" activity="1" checked={formData.time3[1]} onChange={handleChange} />7/3-14
                  <input type="checkbox" time="time4" activity="1" checked={formData.time4[1]} onChange={handleChange} />7/17-28<br/>
                  <strong>Soccer</strong><br/>
                  <input type="checkbox" time="time1" activity="2" checked={formData.time1[2]} onChange={handleChange} />6/5-16
                  <input type="checkbox" time="time2" activity="2" checked={formData.time2[2]} onChange={handleChange} />6/19-30
                  <input type="checkbox" time="time3" activity="2" checked={formData.time3[2]} onChange={handleChange} />7/3-14
                  <input type="checkbox" time="time4" activity="2" checked={formData.time4[2]} onChange={handleChange} />7/17-28<br/>
                  <strong>Baseball</strong><br/>
                  <input type="checkbox" time="time1" activity="3" checked={formData.time1[3]} onChange={handleChange} />6/5-16
                  <input type="checkbox" time="time2" activity="3" checked={formData.time2[3]} onChange={handleChange} />6/19-30
                  <input type="checkbox" time="time3" activity="3" checked={formData.time3[3]} onChange={handleChange} />7/3-14
                  <input type="checkbox" time="time4" activity="3" checked={formData.time4[3]} onChange={handleChange} />7/17-28
                
              </div>
              <div>
                <h4>Discovery</h4>
                <strong>Science</strong><br/>
                  <input type="checkbox" time="time1" activity="4" checked={formData.time1[4]} onChange={handleChange} />6/5-16
                  <input type="checkbox" time="time2" activity="4" checked={formData.time2[4]} onChange={handleChange} />6/19-30
                  <input type="checkbox" time="time3" activity="4" checked={formData.time3[4]} onChange={handleChange} />7/3-14
                  <input type="checkbox" time="time4" activity="4" checked={formData.time4[4]} onChange={handleChange} />7/17-28<br/>
                  <strong>Art</strong><br/>
                  <input type="checkbox" time="time1" activity="5" checked={formData.time1[5]} onChange={handleChange} />6/5-16
                  <input type="checkbox" time="time2" activity="5" checked={formData.time2[5]} onChange={handleChange} />6/19-30
                  <input type="checkbox" time="time3" activity="5" checked={formData.time3[5]} onChange={handleChange} />7/3-14
                  <input type="checkbox" time="time4" activity="5" checked={formData.time4[5]} onChange={handleChange} />7/17-28
              </div>
            </div>
          </div>
        :
          <div>
            <h3>5-7 year old activities</h3>
            <div className="flexContainer horizontal">
            <div>
                <h4>Sports</h4>
              </div>
              <div>
                <h4>Discovery</h4>
              </div>
            </div>
          </div>
        }

      </form> */}
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