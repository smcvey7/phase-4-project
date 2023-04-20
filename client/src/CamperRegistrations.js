import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


function CamperRegistrations({camper}){
  const navigate = useNavigate()
  const [activities, setActivities] = useState(null)
  const [filteredActivities, setFilteredActivities] = useState(null)
  const [currentSelection, setCurrentSelection] = useState({
    age_group: "all",
    dates: "all"
  })

  useEffect(()=>{
    if (!camper || !camper.admin){
      navigate('/')
    }else{
      fetch("/activities")
      .then((r)=>r.json())
      .then((data)=>{
        setActivities(data)
        setFilteredActivities(data)
        setCurrentSelection(({
          age_group: "all",
          dates: "all"
        }))
      })
    }
  }, [navigate, camper])

  useEffect(()=>{
    if (!activities) return null
    const updatedList = activities.filter((activity)=>{
      if (currentSelection.age_group === "all" && currentSelection.dates === "all"){
        return true
      }else if (currentSelection.age_group === "all"){
        return activity.dates === currentSelection.dates
      }else if (currentSelection.dates === "all"){
        return currentSelection.age_group === activity.age_group
      }else{
        return currentSelection.age_group === activity.age_group && currentSelection.dates === activity.dates
      }
    })
    setFilteredActivities(updatedList)
  }, [currentSelection, activities, navigate])

function handleChange(e){
  setCurrentSelection({
    ...currentSelection,
    [e.target.name]: e.target.value
  })
}
  
  return(
    <div>
      <p>Registration List</p>
      <form>
        Age:
        <select name="age_group" value={currentSelection.age_group} onChange={handleChange}>
          <option value="all">All ages</option>
          <option value="littles">Littles</option>
          <option value="bigs">Bigs</option>
        </select>
        Dates:
        <select name="dates" value={currentSelection.dates} onChange={handleChange}>
          <option value="all">All dates</option>
          <option value="time1">6/5-16</option>
          <option value="time2">6/19-30</option>
          <option value="time3">7/3-14</option>
          <option value="time4">7/17-28</option>
        </select>
      </form>
      <div>
        {filteredActivities ? filteredActivities.map((activity)=><p>{activity.name}({activity.age_group} - {activity.dates})</p>): <></>}
      </div>
    </div>
  )
}

export default CamperRegistrations