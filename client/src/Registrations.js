import React, {useState} from "react";

function Registrations({currentUser, activities}){

  const [formData, setFormData] = useState(currentUser ? {
    camper_id: currentUser.id,
    registrations: findRegistrations()
  }: null)

    function findRegistrations(){
      const registrations = {
        time1: "none",
        time2: "none",
        time3: "none",
        time4: "none"
      }
      currentUser.activities.map((activity)=>{
        registrations[activity.dates] = activity.id 
      })
      return registrations
    }

  function createOptions(time){
    const ageGroup = currentUser.age <= 7 ? "littles" : "bigs"
    const options = activities.map((activity)=>{
      if (activity.dates === time && activity.age_group === ageGroup){
        return <option key={activity.id} value={activity.id}>{activity.name} ({activity.spots} remaining)</option>
      }
    })
    return options
  }

  function handleChange(e){
    setFormData({
      ...formData,
      registrations: {
        ...formData.registrations,
        [e.target.name]: parseInt(e.target.value)
      }
    })
    console.log(formData)
  }

  return(
    currentUser ? 
    <div id="registrations">
      <h2>{currentUser.first_name}'s Registrations (age: {currentUser.age})</h2>
      <ul>
        
      </ul>
      <form>
        6/5-16:
          <select name="time1" value={formData.registrations.time1} onChange={handleChange}>
            <option value="none">None</option>
            {createOptions("time1")}
          </select><br/>
        6/19-30:
        <select name="time2" value={formData.registrations.time2} onChange={handleChange}>
            <option value="none">None</option>
            {createOptions("time2")}
          </select><br/>
        7/3-14:
        <select name="time3" value={formData.registrations.time3} onChange={handleChange}>
            <option value="none">None</option>
            {createOptions("time3")}
          </select><br/>
        7/17-28:
        <select name="time4" value={formData.registrations.time4} onChange={handleChange}>
            <option value="none">None</option>
            {createOptions("time4")}
          </select><br/>
      </form>
    </div> :
    <></>
  )
}

export default Registrations