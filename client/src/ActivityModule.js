import React from "react";

function ActivityModule({activity}){

  function setDates(time){
   switch (time) {
      case 'time1' : return "6/5-16"
      case 'time2' : return "6/19-30"
      case 'time3' : return "7/3-14"
      case 'time4' : return "7/17-28"
      default : return "none"
    }
  }

  return(
    <div className="registrationModule">
      <h3>{activity.name} - {activity.age_group} ({setDates(activity.dates)})</h3>
      <ul>
        {activity.campers.map((camper)=><li key={activity.id + camper.id}>{camper.first_name} {camper.last_name}</li>)}
      </ul>
    </div>
  )
}

export default ActivityModule