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
              <img src="./img/Basic_5_7_2.png" alt="basic skills" width="400px" height="230px" /><br/>
              <button name="basicSkillsLittles" onClick={onSelect}>Learn more</button>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <img src="./img/Track_5_7_2.png" alt="track" width="400px" height="230px" /><br/>
              <button name="trackLittles" onClick={onSelect}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <img src="./img/soccer_5_7.jpeg" alt="soccer" width="400px" height="230px" /><br/>
            <button name="soccerLittles" onClick={onSelect}>Learn more</button>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <img src="./img/baseball_5_7_1.jpeg" alt="baseball" width="400px" height="230px" /><br/>
            <button name="baseballLittles" onClick={onSelect}>Learn more</button> 
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
              <img src="./img/Basic_8_10.png" alt="advanced skills" width="400px" height="230px" /><br/>
              <button name="advancedSkillsBigs" onClick={onSelect}>Learn more</button>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <img src="./img/Track_8_10_3.png" alt="track" width="400px" height="230px" /><br/>
              <button name="trackBigs" onClick={onSelect}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <img src="./img/Soccer_8_10_1.jpeg" alt="soccer" width="400px" height="230px" /><br/>
            <button name="soccerBigs" onClick={onSelect}>Learn more</button>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <img src="./img/baseball_8_10_girls.jpeg" alt="baseball" width="400px" height="230px" /><br/>
            <button name="baseballBigs" onClick={onSelect}>Learn more</button> 
          </div>
        </div>
      </div>
    </div>
  )
}


export default Sports