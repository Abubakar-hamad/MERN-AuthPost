import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost , getPost } from '../../redux/Slice/Post/PostSlice'

function PostItem({post , update}) {

    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.thePosts)
    const del = () =>{
        dispatch(deletePost(post._id))
        update()
        
        if(posts){
            dispatch(getPost())
        }
    }
    return (
    <div className='goal'>
        <button style={{marginLeft:'70%'}} onClick={del}>X</button>
        <div className="">
            {new Date(post.createdAt).toLocaleString('en-US')}
        </div>
        <h3>{post.text}</h3>
    </div>
  )
}

export default PostItem