import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Message from "./Message";

function MessageList({camper}){
  const navigate = useNavigate()
  const [messages, setMessages] = useState(null)

  useEffect(()=>{
    if (!camper || !camper.admin){
      return null
    }else{
      fetch("/messages")
      .then((r)=>r.json())
      .then((data)=>{
        setMessages(data)
      })
    }
  }, [navigate, camper])

  function onDelete(id){
    const updatedMessages = messages.filter((message)=>message.id !== id)
    setMessages(updatedMessages)
  }

  function updateMessages(data){
    const updatedMessages = messages.filter((message)=> message.id !== data.id)
    updatedMessages.push(data)

    setMessages(updatedMessages)
  }
  if (!camper || !camper.admin){
    return(<em>Unauthorized</em>)
  }
  return(
    <div id="messageList">
      <h1>Message List</h1>
 
      {messages ?
        messages.length === 0 ? <em>No messages</em> : messages.map((message)=> <Message key={message.id} info={message} onDelete={onDelete} updateMessages={updateMessages} />).reverse() : <></>
      }
    </div>
  )
}

export default MessageList