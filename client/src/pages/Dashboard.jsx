import React , {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import CreateForm from '../components/CreateForm/CreateForm'
import Spinner from '../components/Spinner/Spinner'
import { getPost, reset } from '../redux/Slice/Post/PostSlice'
import PostItem from '../components/PostItem/PostItem'

function Dashboard() {
  const {user}  = useSelector(state => state.auth)
  const {posts ,isLoading ,isSuccess , isError , message} = useSelector((state) => state.thePosts)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(isError){
      console.log(message);
    }
    
    if(!user){
      navigate('/login')
    }

    dispatch(getPost())
    return ()=>{
      dispatch(reset())
    }
  } , [user  , navigate])

  if(isLoading){
   return <Spinner/>
  }
console.log(posts);
  return (
    <>
   {user 
     ? 
      <section className='heading'>
          <h1>wellcome { user.name}</h1>
          <p>Post</p>
      </section>
      :
        '' 
    }

    <section>
      <CreateForm update={()=>dispatch(getPost())} />
    </section>

    <section>
      {posts.length > 0 ? (
       <div className="goals">
        {posts.map((post)=>{

          return <PostItem key={post._id} post={post} update={()=>dispatch(getPost())} />
        })}
       </div>
      ) : ( <p>its empty</p>)
}
    </section>
    </>
  )
}

export default Dashboard