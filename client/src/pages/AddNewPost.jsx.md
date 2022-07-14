import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {reset , addPost} from '../redux/Slice/Post/PostSlice'
import {toast} from 'react-toastify'
import Spinner from "../components/Spinner/Spinner";


function AddNewPost() {
    const [formData , setFormData] = useState({
        text:''
    })

    const {text} = formData

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const {isLoading , isSuccess  , isError , message , postText} = useSelector(state => state.post)

    useEffect(()=>{
        if(isError){
          toast.error(message)
        }  

        if(isSuccess || postText){
            toast.success('post publish')
          navigate('/')
        }

        // dispatch(reset())
        
    },[postText, isError ,isSuccess ,message , reset , dispatch , navigate ])

    const onChange= (e)=>{
      setFormData({ ...formData ,
        [e.target.name]:e.target.value
      })
    }

    const onSubmit =(e)=>{
      e.preventDefault()
      console.log(formData);
      const post = {
        text
      }
      dispatch(addPost(post))
    }

    if(isLoading){
      <Spinner />
    }

  return (
    <div style={{marginTop:"5rem"}}>
        <form onSubmit={onSubmit} action="">
            <div className="form-group">
            <textarea onChange={onChange} value={text} name="text" id="" cols="30" rows="10" placeholder="enter your post"></textarea>
            <input type="submit"  />
            </div>
        </form>
    </div>
  )
}

export default AddNewPost