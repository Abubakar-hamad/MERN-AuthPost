import { useState } from "react"
import { useDispatch } from "react-redux";
import { createPost  } from "../../redux/Slice/Post/PostSlice";


function CreateForm({update}) {

    const [ text , setText] = useState('')
    const dispatch  = useDispatch()
    const onSubmit =(e)=>{
        e.preventDefault() ; 
        dispatch(createPost({text}))
        setText('')
       { update()}

    }


  return (
    <div onSubmit={onSubmit} className="form">
       <form action="" >
      <div className="form-group">
      <label htmlFor="text">Create Post</label>
        <textarea type="text" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <input type="submit"  />
      </div>
        </form> 
    </div>
  )
}

export default CreateForm