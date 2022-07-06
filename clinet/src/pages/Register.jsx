import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FaUser } from "react-icons/fa"
import {toast} from 'react-toastify'
import '../App.css'
import { register, reset } from "../redux/Slice/Auth/Authslice"
import Spinner from "../components/Spinner/Spinner"




function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user , isLoading ,isError , isSuccess , message} = useSelector((state) => state.auth)
  
  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  } , [user , isError ,isSuccess , message , navigate , dispatch])
  const[formData , setFormData] = useState({
    name:'',
    email:'',
    password:'', 
    password2:''
  })
  const {name , email ,password  ,password2} = formData
  
  
  const onChange = (e)=>{
    setFormData({...formData , [e.target.name]:e.target.value})
    
  }
  
  
  const onSubmit = (e)=>{
    e.preventDefault()
    console.log(formData);
    if(password !== password2){
      toast.error('password do not match')
    }else{
      const userData = {
        name , 
        email , 
        password
      }
      dispatch(register(userData))
    }
   }

   if(isLoading){
    <Spinner />
   }
   if(isError){
    <Spinner />
   }
  
  return (

    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>


      <section className="form">
        <form onSubmit={onSubmit} action="">
          <div className="form-group">
            <input type="text" onChange={onChange} className="form-control" id="name" name="name" value={name} placeholder="Enter Name" />
            <input type="text" onChange={onChange} className="form-control" id="email" name="email" value={email} placeholder="Enter Email" />
            <input type="text" onChange={onChange} className="form-control" id="password" name="password" value={password} placeholder="Enter Password" />
            <input type="text" onChange={onChange} className="form-control" id="password2" name="password2" value={password2} placeholder="Confirm Password" />
            <input type="submit" className="btn" />
          </div>
        </form>
    </section>
    </>
  )
}

export default Register