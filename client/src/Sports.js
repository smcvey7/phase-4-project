import React, {useState} from "react";
import ActivityInfo from "./ActivityInfo";

function Sports(){

  const [activity, setActivity] = useState(null)

  function onSelect(e){
    setActivity(e.target.name)
  }

  return(
    <div>
      <h2>Sports Camps</h2>
      <h3 id="sportsLittles">Ages 5-7</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>BASIC SKILLS</h3>
              <button name="basicSkills" onClick={onSelect}>Learn more</button>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <button name="track" onClick={onSelect}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <button name="soccer" onClick={onSelect}>Learn more</button>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <button name="baseball" onClick={onSelect}>Learn more</button> 
          </div>
        </div>
      </div>
      <ActivityInfo activity={activity} />
      <h3 id="sportsBigs">Ages 8-10</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>ADVANCED SKILLS</h3>
              <button name="advancedSkills" onClick={onSelect}>Learn more</button>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <button name="track" onClick={onSelect}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <button name="soccer" onClick={onSelect}>Learn more</button>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <button name="baseball" onClick={onSelect}>Learn more</button> 
          </div>
        </div>
      </div>
    </div>
  )
}


export default Sports