import React, {useState} from "react";
import ActivityInfo from "./ActivityInfo";

function Sports(){

  const [activity, setActivity] = useState(null)

  function onSelect(e){
    setActivity(e.target.getAttribute("name"))
    scrollToInfo()
  }

  function scrollToInfo(){
    const moreInfo = document.getElementById("moreInfo")

    moreInfo.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return(
    <div>
      <h2 id="campType" className="red">Sports Camps</h2>
      <h3 id="sportsLittles" className="red">Ages 5-7</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>BASIC SKILLS</h3>
              <div className="container">
                <img src="./img/Basic_5_7_2.png" alt="basic skills"  className="image"/>
                <div className="overlay" name="basicSkillsLittles" onClick={onSelect}>
                  <div className="text" name="basicSkillsLittles" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <div className="container">
                <img src="./img/Track_5_7_2.png" alt="track"  className="image"/>
                <div className="overlay" name="trackLittles" onClick={onSelect}>
                  <div className="text" name="trackLittles" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <div className="container">
                <img src="./img/soccer_5_7.jpeg"  alt="soccer"  className="image"/>
                <div className="overlay" name="soccerLittles" onClick={onSelect}>
                  <div className="text" name="soccerLittles" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <div className="container">
                <img src="./img/baseball_5_7_1.jpeg" alt="baseball"  className="image"/>
                <div className="overlay" name="baseballLittles" onClick={onSelect}>
                  <div className="text" name="baseballLittles" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div id="moreInfo" className={activity ? "blue flexContainer vertical spaceAround" : null}>
        <ActivityInfo activity={activity} />
      </div>
      <h3 id="sportsBigs" className="red">Ages 8-10</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>ADVANCED SKILLS</h3>
              <div className="container">
                <img src="./img/Basic_8_10.png" alt="advanced skills" className="image"/>
                <div className="overlay" name="advancedSkillsBigs" onClick={onSelect}>
                  <div className="text" name="advancedSkillsBigs" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <div className="container">
                <img src="./img/Track_8_10_3.png" alt="track" name="trackBigs"  className="image"/>
                <div className="overlay" name="trackBigs" onClick={onSelect}>
                  <div className="text" name="trackBigs" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <div className="container">
                <img src="./img/Soccer_8_10_1.jpeg" alt="soccer"   className="image"/>
                <div className="overlay" name="soccerBigs" onClick={onSelect}>
                  <div className="text" name="soccerBigs" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <div className="container">
                <img src="./img/baseball_8_10_girls.jpeg" alt="baseball"  className="image"/>
                <div className="overlay" name="baseballBigs" onClick={onSelect}>
                  <div className="text" name="baseballBigs" onClick={onSelect}>LEARN MORE</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sports