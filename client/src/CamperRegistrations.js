import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


function CamperRegistrations({camper}){
  const navigate = useNavigate()

  useEffect(()=>{
    if (!camper || !camper.admin){
      navigate('/')
    }
  }, [])
  
  return(
    <div>
      <p>Registration List</p>
    </div>
  )
}

export default CamperRegistrations