import React, {useEffect, useState, useContext} from "react";
import MyContext from "./MyContext";

function CostTableRow({activity, activitySignup}){
  const [isEditing, setIsEditing] = useState(false)
  const [noteContent, setNoteContent] = useState("")
  const {camper, setCamper} = useContext(MyContext)

  useEffect(()=>{
    if (activitySignup){
      setNoteContent(activitySignup.notes)
    }
  }, [activitySignup, camper])

  function handleSubmit(e){
    e.preventDefault()
    fetch(`/signups/${activitySignup.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({notes: noteContent})
    })
    .then((r)=>r.json())
    .then((camper)=>setCamper(camper))

    setIsEditing(false)
  }

  function handleChange(e){
    setNoteContent(e.target.value)
  }

  return(
    <tr key={activity.id}>
      <td>{activity.name}</td>
      {isEditing ?
        <td>
          <form onSubmit={handleSubmit}>
            <input value={noteContent===""? "" : noteContent} onChange={handleChange}/>
            <input type="submit" />
          </form>
        </td> : <td onClick={()=>setIsEditing(true)}>{noteContent === "" ? <small className="blueText">add note</small> : noteContent}</td>}
      {activitySignup.paid ? <td className="green">${activity.cost} (paid)</td> : <td className="red">${activity.cost} (unpaid)</td>}
    </tr>
  )
}

export default CostTableRow