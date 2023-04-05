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

    moreInfo.scrollIntoView({ behavior: "smooth", block: "end", block: "center" })
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
              <div class="container">
                <img src="./img/Basic_5_7_2.png" alt="basic skills"  class="image"/>
                <div class="overlay" name="basicSkillsLittles" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
                </div>
              </div>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <div class="container">
                <img src="./img/Track_5_7_2.png" alt="track"  class="image"/>
                <div class="overlay" name="trackLittles" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <div class="container">
                <img src="./img/soccer_5_7.jpeg"  alt="soccer"  class="image"/>
                <div class="overlay" name="soccerLittles" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
                </div>
              </div>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <div class="container">
                <img src="./img/baseball_5_7_1.jpeg" alt="baseball"  class="image"/>
                <div class="overlay" name="baseballLittles" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
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
              <div class="container">
                <img src="./img/Basic_8_10.png" alt="advanced skills" class="image"/>
                <div class="overlay" name="advancedSkillsBigs" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
                </div>
              </div>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <div class="container">
                <img src="./img/Track_8_10_3.png" alt="track" name="trackBigs"  class="image"/>
                <div class="overlay" name="trackBigs" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <div class="container">
                <img src="./img/Soccer_8_10_1.jpeg" alt="soccer"   class="image"/>
                <div class="overlay" name="soccerBigs" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
                </div>
              </div>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <div class="container">
                <img src="./img/baseball_8_10_girls.jpeg" alt="baseball"  class="image"/>
                <div class="overlay" name="baseballBigs" onClick={onSelect}>
                  <div class="text">LEARN MORE</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Sports