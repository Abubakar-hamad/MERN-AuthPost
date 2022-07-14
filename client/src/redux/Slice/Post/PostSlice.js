import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import PostService from './PostService'


const initialState = {
  posts :[] ,
  isLoading:false , 
  isSuccess:false , 
  isError : false ,
  message:'' 
}

export const createPost = createAsyncThunk('post/create' , async(postData , thunkAPI)=>{
  try {
    const token = thunkAPI.getState().auth.user.token
    return await PostService.createpost(postData , token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const getPost = createAsyncThunk('psot/getAll' , async( _, thunkAPI) =>{
  try {
    const token = thunkAPI.getState().auth.user.token
    return await PostService.getpost(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const deletePost =  createAsyncThunk('post/delete' , async(id , thunkAPI)=>{
  try {
    const token = thunkAPI.getState().auth.user.token
    return await PostService.del(id , token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})




const postSlice = createSlice({
  name:'thePosts' ,
  initialState ,
  reducers:{
    reset:(state) => initialState
  },


  extraReducers:(trick)=>{
    trick
    

    .addCase(createPost.pending , (state)=>{
      state.isLoading=true
    })

    .addCase(createPost.fulfilled , (state, action)=>{
      state.isLoading=false ;
      state.isSuccess =true ; 
      state.posts= action.payload;

    })

    .addCase(createPost.rejected , (state,action)=>{
      state.isLoading =false ;
      state.isSuccess = false ; 
      state.error = true ; 
      state.message = action.payload 
    })

    .addCase(getPost.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getPost.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.posts = action.payload
    })
    .addCase(getPost.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })

    .addCase(deletePost.pending, (state) => {
      state.isLoading = true
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.posts = state.posts.filter((post)=> post.id !== action.payload.id)
    })
    .addCase(deletePost.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  }
})


export const {reset} = postSlice.actions
export default postSlice.reducer