import React, {useEffect, useState} from "react";

function Registrations({camper, activities, updateActivities}){
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdated, setIsUpdated] = useState(true)
  const [formData, setFormData] = useState({
    registrations: {
      time1: "none",
      time2: "none",
      time3: "none",
      time4: "none"
    }
  })

  useEffect(()=>{
    function findRegistrations(){
      const registrations = {
        time1: "none",
        time2: "none",
        time3: "none",
        time4: "none"
      }
      if (camper){
        camper.activities.map((activity)=>{
          registrations[activity.dates] = activity.id 
          return null
        })
      }
      return registrations
    }
    setFormData({
      camper_id: camper ? camper.id : null,
      registrations: findRegistrations()
    })
  }, [camper])

  function createOptions(time){
    const ageGroup = camper.age <= 7 ? "littles" : "bigs"
    const options = activities ? activities.map((activity)=>{
      if (activity.dates === time && activity.age_group === ageGroup){
        return <option key={activity.id} value={activity.id}>{activity.name}</option>
      }else return null
    }) : null
    return options
  }

  function handleChange(e){
    const value = e.target.value
    setFormData({
      ...formData,
      registrations: {
        ...formData.registrations,
        [e.target.name]: value === "none" ? "none" : parseInt(value)
      }
    })
    setIsUpdated(false)
  }

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)
    fetch('/signups', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((data)=>updateActivities(data))
    setIsLoading(false)
    setIsUpdated(true)
  }

  if (!camper) return <em>Please login to view registrations</em>

  return(
    camper ? 
    <div id="registrations">
      <h2>{camper.first_name}'s Registrations (age: {camper.age})</h2>
      {isUpdated ? <p className="green">Your registrations are up to date</p> : <p className="red">Registrations changed. Click update to save changes</p>}
      <form onSubmit={handleSubmit}>
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
          <button type="submit">{isLoading ? "Loading..." : "Update"}</button>
      </form>
    </div> :
    <></>
  )
}

export default Registrations