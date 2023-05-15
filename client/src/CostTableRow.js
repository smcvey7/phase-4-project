import React, {useEffect, useState, useContext} from "react";
import MyContext from "./MyContext";

function CostTableRow({activity, activitySignup}){
  const [isEditing, setIsEditing] = useState(false)
  const [noteContent, setNoteContent] = useState("click to add note")
  const {camper, setCamper} = useContext(MyContext)

  useEffect(()=>{
    if (activitySignup && activitySignup.notes !== ""){
      setNoteContent(activitySignup.notes)
    }
  }, [activitySignup])

  function handleSubmit(e){
    e.preventDefault()
    const update = JSON.stringify({notes: noteContent})
    console.log(update)
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
    const newContent = e.target.value
    if (newContent === ''){
      setNoteContent("click to add note")
    }else{
      setNoteContent(e.target.value)
    }
  }

  return(
    <tr key={activity.id}>
      <td>{activity.name}</td>
      {isEditing ?
        <td>
          <form onSubmit={handleSubmit}>
            <input value={noteContent==="click to add note"? "" : noteContent} onChange={handleChange}/>
            <input type="submit" />
          </form>
        </td> : <td onClick={()=>setIsEditing(true)}>{noteContent === "click to add note" ? <small className="blueText">add note</small> : noteContent}</td>}
      {activitySignup.paid ? <td className="green">${activity.cost} (paid)</td> : <td className="red">${activity.cost} (unpaid)</td>}
    </tr>
  )
}

export default CostTableRow