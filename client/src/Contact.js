import React, {useState} from "react";

function Contact(){
  const [formData, setFormData] = useState({
    content: '',
    contact: ''
  })

  const [errors, setErrors] = useState(null)

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
    .then((r)=>{
      if (r.ok){
        setErrors(["Message sent"])
        resetFormData()
      }else{
        r.json().then((error_list)=>setErrors(error_list.errors))
      }
    })
    
  }

  return(
    <div>
      <h2>Contact</h2>
      {errors ? <ul>
        {errors.map((error) => <li className="errors" key={error}>{error}</li>)}
      </ul> : null}
      <form onSubmit={handleSubmit}>
        email:<br/><input name="contact" value={formData.contact} onChange={handleChange} /><br/>
        message:<br/><textarea name='content'  value={formData.content} onChange={handleChange} /><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Contact