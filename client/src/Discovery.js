import React, {useState} from "react";
import ActivityInfo from "./ActivityInfo";
import { useNavigate } from "react-router-dom";

function Discovery(){
  const [activity, setActivity] = useState(null)
  const navigate = useNavigate()
  // reveal activity info
  function onSelect(e){
    setActivity(e.target.name)
    scrollToInfo()
  }

  function scrollToInfo(){
    const moreInfo = document.getElementById("moreInfo")

    moreInfo.scrollIntoView({ behavior: "smooth", block: "end", block: "center" })
  }

  return(
    <div className="flexContainer vertical">
      <div>
        <h2>Discovery Camps</h2>
        <h3 id="discoveryLittles">Ages 5-7</h3>
        <div className="flexContainer vertical">
          <div className="flexContainer vertical">
            <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>Science</h3>
              <img src="./img/science_5_7_2.jpeg" alt="science" name="scienceLittles" onClick={onSelect} /><br/>
            </div>
              <div className="activityBox">
                <h3>Art</h3>
                <img src="./img/art_5_7_5.jpeg" alt="art" name="artLittles" onClick={onSelect} /><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="moreInfo" className={activity ? "blue" : null}>
      <ActivityInfo activity={activity} />
      </div>
      <div>
        <h3 id="discoveryBigs">Ages 8-10</h3>
        <div className="flexContainer vertical">
          <div className="flexContainer vertical">
            <div className="flexContainer horizontal spaceAround">
              <div className="activityBox">
                <h3>Science</h3>
                <img src="./img/science_5_7_1.jpeg" alt="science" name="scienceBigs" onClick={onSelect} /><br/>
              </div>
              <div className="activityBox">
                <h3>Art</h3>
                <img src="./img/art_8_10.jpeg" alt="art" name="artBigs" onClick={onSelect} /><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discovery