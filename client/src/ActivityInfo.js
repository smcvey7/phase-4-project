import React from "react";

function ActivityInfo({activity}){

  const descriptions = {
    basicSkillsLittles: "Basic Skills (ages 5-7): Enhance your child's basic athletic skills, while having fun and burning energy! Throwing, catching, running, and kicking",
    trackLittles: "Track (ages 5-77): Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    soccerLittles: "Soccer (ages 5-7): Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    baseballLittles: "Basebal (ages 5-7): Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    advancedSkillsBigs: "Advanced Skills (ages 8-10): Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    trackBigs: "Track (ages 8-10): Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    soccerBigs: "Soccer (ages 8-10): Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    baseballBigs: "Baseball (ages 8-10): Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
    scienceLittles: "Science (ages 5-7): Learn about planets and theh world around you with nature walks and experiments.",
    scienceBigs: "Science (ages 8-10): Explore plants and animals at Woodmansee Park.",
    artLittles: "Art (ages 5-7): Paint, draw, and build cardboard castles!",
    artBigs: "Art (ages 8-10): More advanced painting and 3D instruction."
  }

  return(
      <p className="activityInfo">{descriptions[activity]}</p>
  )
}

export default ActivityInfo