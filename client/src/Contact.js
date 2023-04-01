import React, {useState} from "react";

function Contact(){
  const [formData, setFormData] = useState({
    content: '',
    contact: ''
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function resetFormData(){
    setFormData({
      content: '',
      contact: ''
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('/messages', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((data)=>console.log(data))

    resetFormData()
  }

  return(
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        email:<br/><input name="contact" value={formData.contact} onChange={handleChange} /><br/>
        message:<br/><input name='content' value={formData.content} onChange={handleChange} /><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Contact