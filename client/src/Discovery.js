import React, {useState} from "react";
import ActivityInfo from "./ActivityInfo";

function Discovery(){

  const [activity, setActivity] = useState(null)

  function onSelect(e){
    setActivity(e.target.name)
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
              <button name="scienceLittles" onClick={onSelect}>Learn more</button>
            </div>
            <div className="activityBox">
              <h3>Art</h3>
              <button name="artLittles" onClick={onSelect}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <ActivityInfo activity={activity} />
      <h3 id="discoveryBigs">Ages 8-10</h3>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>Science</h3>
              <button name="scienceBigs" onClick={onSelect}>Learn more</button>
            </div>
            <div className="activityBox">
              <h3>Art</h3>
              <button name="artBigs" onClick={onSelect}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discovery