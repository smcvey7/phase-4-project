import React, {useState} from "react";
import ActivityInfo from "./ActivityInfo";
import { useNavigate } from "react-router-dom";

function Discovery(){

  const [activity, setActivity] = useState(null)

  const navigate = useNavigate()

  function onSelect(e){
    setActivity(e.target.name)
    navigate('/discovery#moreInfo')
  }

  return(
    <div>
      <h2>Discovery Camps</h2>
      <h3 id="discoveryLittles">Ages 5-7</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>Science</h3>
              <img src="./img/science_5_7_3.jpeg" alt="science" width="400px" height="230px" /><br/>
              <a href="/discovery#moreInfo" name="scienceLittles" onClick={onSelect}>Learn more</a>
            </div>
            <div className="activityBox">
              <h3>Art</h3>
              <img src="./img/art_5_7_5.jpeg" alt="art" width="400px" height="230px" /><br/>
              <a href="/discovery#moreInfo" name="artLittles" onClick={onSelect}>Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div id="moreInfo">
        <ActivityInfo activity={activity} />
      </div>
      <h3 id="discoveryBigs">Ages 8-10</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>Science</h3>
              <img src="./img/science_5_7_1.jpeg" alt="science" width="400px" height="230px" /><br/>
              <a href="/discovery#moreInfo" name="scienceBigs" onClick={onSelect}>Learn more</a>
            </div>
            <div className="activityBox">
              <h3>Art</h3>
              <img src="./img/art_8_10.jpeg" alt="art" width="400px" height="230px" /><br/>
              <a href="/discovery#moreInfo" name="artBigs" onClick={onSelect}>Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discovery