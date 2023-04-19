import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


function MessageList({camper}){
  const navigate = useNavigate()

  useEffect(()=>{
    if (!camper || !camper.admin){

      navigate('/')
    }
  }, [])
  
  return(
    <div>
      <p>Message List</p>
    </div>
  )
}

export default MessageList