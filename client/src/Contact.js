import React, {useState} from "react";

function Contact(){
  const [formData, setFormData] = useState({
    message: '',
    email: '',
    name: ''
  })
  const [errors, setErrors] = useState(null)
  const [isLoading, setIsLoading]=useState(false)

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function resetFormData(){
    setFormData({
      message: '',
      email: '',
      name: ''
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setErrors(null)
    setIsLoading(true)
    fetch('/messages', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>{
      setIsLoading(false)
      if (r.ok){
        alert("Your message has been sent")
        resetFormData()
        setErrors(null)
      }else{
        r.json().then((error_list)=>setErrors(error_list.errors))
      }
    })
    
  }

  return(
    <div>
      <h2>Contact</h2>
      <div className="flexContainer horizontal spaceAround">
        <form onSubmit={handleSubmit}>
          name:<br/><input name="name" value={formData.name} onChange={handleChange} /><br/>
          email:<br/><input name="email" value={formData.email} onChange={handleChange} /><br/>
          message:<br/><textarea name='message'  value={formData.message} onChange={handleChange} /><br/>
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </form>
        {errors ? <ul>
          {errors.map((error) => <li className="errors" key={error}>{error}</li>)}
        </ul> : <div/>}
      </div>
    </div>
  )
}

export default Contact