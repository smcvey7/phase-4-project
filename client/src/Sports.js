import React, {useState} from "react";
import ActivityInfo from "./ActivityInfo";
import { useNavigate } from "react-router-dom";

function Sports(){

  const [activity, setActivity] = useState(null)

  const naviagate = useNavigate()

  function onSelect(e){
    setActivity(e.target.name)
    scrollToInfo()
  }

  function scrollToInfo(){
    const moreInfo = document.getElementById("moreInfo")

    moreInfo.scrollIntoView({ behavior: "smooth", block: "end", block: "center" })
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
              <img src="./img/Basic_5_7_2.png" alt="basic skills" name="basicSkillsLittles" onClick={onSelect} /><br/>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <img src="./img/Track_5_7_2.png" alt="track" onClick={onSelect} name="trackLittles" /><br/>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <img src="./img/soccer_5_7.jpeg" name="soccerLittles" onClick={onSelect} alt="soccer"  /><br/>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <img src="./img/baseball_5_7_1.jpeg" alt="baseball" name="baseballLittles" onClick={onSelect}  /><br/>
          </div>
        </div>
      </div>
      <div id="moreInfo" className={activity ? "blue" : null}>
      <ActivityInfo activity={activity} />
      </div>
      <h3 id="sportsBigs">Ages 8-10</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>ADVANCED SKILLS</h3>
              <img src="./img/Basic_8_10.png" alt="advanced skills" name="advancedSkillsBigs" onClick={onSelect} /><br/>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <img src="./img/Track_8_10_3.png" alt="track" name="trackBigs" onClick={onSelect} /><br/>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <img src="./img/Soccer_8_10_1.jpeg" alt="soccer" name="soccerBigs" onClick={onSelect} /><br/>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <img src="./img/baseball_8_10_girls.jpeg" alt="baseball" name="baseballBigs" onClick={onSelect} /><br/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Sports