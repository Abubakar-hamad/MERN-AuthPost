import { useState } from "react"
import { FaUser } from "react-icons/fa"
import '../App.css'

function Login() {
  const[formData , setFormData] = useState({
    email:'',
    password:'',

  })
  const { email ,password } = formData
  
  
  const onChange = (e)=>{
    setFormData({...formData , [e.target.name]:e.target.value})
    
  }
  
  
  const onSubmit = (e)=>{
    e.preventDefault()
    console.log(formData);
   }
  
  return (

    <>
      <section className="heading">
        <h1>
          <FaUser /> Login
        </h1>
        <p>Please Login with your account</p>
      </section>


      <section className="form">
        <form onSubmit={onSubmit} action="">
          <div className="form-group">
            <input type="text" onChange={onChange} className="form-control" id="email" name="email" value={email} placeholder="Enter Email" />
            <input type="text" onChange={onChange} className="form-control" id="password" name="password" value={password} placeholder="Enter Password" />
            <input type="submit" className="btn" />
          </div>
        </form>
    </section>
    </>
  )
}

export default Login