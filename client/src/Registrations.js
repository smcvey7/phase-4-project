import React, {useEffect, useState, useContext} from "react";
import Costs from "./Costs";
import MyContext from "./MyContext";
import CostTableRow from "./CostTableRow";

function Registrations(){
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdated, setIsUpdated] = useState(true)
  const [tableData, setTableData] = useState({
    rows: [],
    total: 0
  })
  const [formData, setFormData] = useState({
    registrations: {
      time1: "none",
      time2: "none",
      time3: "none",
      time4: "none"
    }
  })
  const {camper, setCamper, activities} = useContext(MyContext)
  

  useEffect(()=>{
    // find camper's active registrations to auto-fill form
    function findRegistrations(){
      const registrations = {
        time1: "none",
        time2: "none",
        time3: "none",
        time4: "none"
      }
      const tableData = {
        rows: [],
        total: 0
      }

      if (camper){
        camper.activities.map((activity)=>{
          registrations[activity.dates] = activity.id
          const activitySignup = camper.signups.filter((signup)=>signup.activity_id === activity.id)[0]
          tableData.rows.push(<CostTableRow key={activitySignup.id} activity={activity} activitySignup={activitySignup}/>)
          tableData.total += activity.cost
          return null
        })
      }
      return {registrations, tableData}
    }
    setFormData({
      camper_id: camper ? camper.id : null,
      registrations: findRegistrations().registrations
    })
    setTableData(findRegistrations().tableData)
  }, [camper])
  // create form select options from all available activities depending on ageGroup
  function createOptions(time){
    const ageGroup = camper.age <= 7 ? "littles" : "bigs"
    const options = activities ? activities.map((activity)=>{
      if (activity.dates === time && activity.age_group === ageGroup){
        return <option key={activity.id} value={activity.id}>{activity.name} (${activity.cost})</option>
      }else return null
    }) : null
    return options
  }

  // update user state after changing registrations
  function updateCamper(camper){
    setCamper(camper)
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
    .then((data)=>{
      updateCamper(data)
    })
    setIsLoading(false)
    setIsUpdated(true)
  }

  if (!camper) return <em>Please login to view registrations</em>

  return(
    <div id="registrations">
      <h2>{camper.first_name}'s Registrations (age: {camper.age})</h2>
      <div id="registrations" className="flexContainer vertical ">
        <div id="registrationList">
          <h3 id="changeRegistrations">Change Registrations</h3>
          {isUpdated ? <p className="green">Your registrations are up to date</p> : <p className="red">Registrations changed. Click update to save changes</p>}
          <form onSubmit={handleSubmit}>
            <div className="flexContainer horizontal spaceBetween dateOption">
              <h4>6/5-16:</h4>
              <select name="time1" value={formData.registrations.time1} onChange={handleChange}>
                <option value="none">None</option>
                {createOptions("time1")}
              </select><br/>
            </div>
            <div className="flexContainer horizontal spaceBetween dateOption">
              <h4>6/19-30:</h4>
              <select name="time2" value={formData.registrations.time2} onChange={handleChange}>
                  <option value="none">None</option>
                  {createOptions("time2")}
                </select><br/>
            </div>
            <div className="flexContainer horizontal spaceBetween dateOption">
              <h4>7/3-14:</h4>
              <select name="time3" value={formData.registrations.time3} onChange={handleChange}>
                  <option value="none">None</option>
                  {createOptions("time3")}
                </select><br/>
            </div>
            <div className="flexContainer horizontal spaceBetween dateOption">
              <h4>7/17-28:</h4>
              <select name="time4" value={formData.registrations.time4} onChange={handleChange}>
                  <option value="none">None</option>
                  {createOptions("time4")}
                </select><br/>
            </div>
            <div className="flexContainer flexEnd">
              <button type="submit">{isLoading ? "Loading..." : "Update"}</button>
            </div>
          </form>
        </div>
        <div id="costTableDiv" >
          <h3>Costs</h3>
          <div  className="flexContainer spaceBetween">
            <Costs tableData={tableData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registrations