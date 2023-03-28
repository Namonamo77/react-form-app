import { useState } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    confirmPassword:"",
    joinNewsletter: true
  })

  const handleChange = (event)=>{
    const {name, type, value, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox"  ? checked : value
      }
    })
    
  }
  console.log(formData)

  function handleSubmit(event){
    event.preventDefault()

    if (formData.password === formData.confirmPassword){
      console.log("succesfully logged in!")
    } else {
      console.log("passwords don't match")
      return
    }
    if (formData.joinNewsletter){
      console.log("Thank you for subscribing to the newsletter!")
    }

  }

  return (
    <div className="form-container">
      <div className="container">
        <form className='form' onSubmit={handleSubmit}>
          <input type="email" 
          placeholder='Email'
          className='form-input'
          name="email"
          value={formData.email}
          onChange={handleChange}
          />

          <input 
          type="password" 
          className='form-input'
          placeholder='Password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          />

          <input type="password"
          className='form-input'
          placeholder='Confirm Password'
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          />

          <div className="checkbox">
            <input 
            id="okToNewsletter"
            type="checkbox"
            name='joinNewsletter'
            checked={formData.joinNewsletter}
            onChange={handleChange}
            />
            <label htmlFor="okToNewsletter">I want to join the Newsletter</label>
          </div>

          <button className="submit-cta">Submit</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
