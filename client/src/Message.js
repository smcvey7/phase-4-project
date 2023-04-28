import React, {useState, useEffect} from "react";

function Message({info, onDelete, updateMessages}){
  const emailLink = `mailto:${info.email}?subject=Re: ${info.subject}&body=Dear ${info.name}, %0A%0A%0A original message: %0A ${info.message}`
  const [isRead, setIsRead] = useState(false)

  useEffect(()=>{
    setIsRead(info.read)
  }, [info])

  function handleClick(){
    fetch(`/messages/${info.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({read: !isRead})
    })
    .then((r)=>r.json())
    .then((data)=>{
      updateMessages(data)
    })
  }

  function handleDelete(){
    fetch(`/messages/${info.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })

    onDelete(info.id)
  }

  return(
    <div className="messageModule">
      <strong>{info.name} </strong>{isRead ? <></> : <strong className="unread">(unread)</strong>}
      <h4 className="subject">Subject: {info.subject} {info.formatted_date}</h4>
      <p>{info.message}</p>
      <a href={emailLink} ><button className="messageButton">reply</button></a>
      <button className="messageButton" onClick={handleDelete}>delete</button>
      <button className="messageButton" onClick={handleClick}>{isRead ? "mark as unread" : "mark as read"}</button>
    </div>
  )
}

export default Message