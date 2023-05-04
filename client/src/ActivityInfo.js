import React from "react";

function ActivityInfo({activity}){

  const descriptions = {
    basicSkillsLittles: "Basic Skills (ages 5-7): Enhance your child's basic athletic skills, while having fun and burning energy! Throwing, catching, running, and kicking.",
    trackLittles: "Track (ages 5-7): Run, run, run! Get your child out and moving, learning skills to increase their efficiency and endurance. Students in this class will run up to a mile!",
    soccerLittles: "Soccer (ages 5-7): Your child will work on their coordination and teamwork skills while also learning the basic rules of the game.",
    baseballLittles: "Baseball (ages 5-7): We may not have them hitting home runs yet, but in our introductory baseball course students will learn throwing, catching and batting skills. At this age campers bat off of a tee. They will also learn the different positions, running the bases, and some strategies for making plays.",
    advancedSkillsBigs: "Advanced Skills (ages 8-10): More advanced practice of basic athletic/coordination skills, students will practice Throwing, catching, running, climbing, and kicking.",
    trackBigs: "Track (ages 8-10): Students will work on increasing their running endurance and sprint speeds. They will also be introduced to other track and field events such as high jump, long jump, and hurdles.",
    soccerBigs: "Soccer (ages 8-10): Your camper will improve their soccer skills and learn more strategy. In this class they will also learn more about the different positions and their role in the overall team.",
    baseballBigs: "Baseball (ages 8-10): In addition to basic baseball skills, campers in this class begin learning to pitch and hit thrown balls.",
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