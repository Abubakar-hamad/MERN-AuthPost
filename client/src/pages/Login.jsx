
import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import Spinner from "../components/Spinner/Spinner"
import {signIn , reset} from '../redux/Slice/Auth/Authslice'

function Login() {

  const navigate = useNavigate()
  const dispatch  = useDispatch()

  
  const[formData , setFormData] = useState({
    email:'',
    password:'',

  })
  const { email ,password } = formData
  
  const { user , isLoadin , isError , isSuccess , message} = useSelector(state => state.auth)

  useEffect(()=>{
   
    if(isError){
       toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  }, [ isSuccess , isError , message , navigate , user , dispatch])
  
  const onChange = (e)=>{
    setFormData({...formData , [e.target.name]:e.target.value})
    
  }
  
  
  const onSubmit = (e)=>{
    e.preventDefault()
    const userData = {
      email , 
      password
    }
    console.log(userData);
    dispatch(signIn(userData))
    
   }
  
   if(isLoadin){
    return <Spinner/>
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
        <form onSubmit={onSubmit} >
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