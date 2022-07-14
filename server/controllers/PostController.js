import asyncHandler from 'express-async-handler'
import PostModel from '../models/PostModel.js'
import UserModel from '../models/UserModel.js'




export const GetPosts = asyncHandler( async(req, res) =>{
    const getPost = await PostModel.find({user:req.user.id})
    res.status(200).json(getPost)
})




export const AddPost = asyncHandler(async (req, res) =>{
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    
    const insertPost = await PostModel.create({
        text:req.body.text ,
        user:req.user.id
    })
    res.status(200).json(insertPost)
})



export const editPost = asyncHandler(async(req , res)=>{
    const post = await PostModel.findById(req.params.id)
   
    if(!post){
        res.status(400)
        throw new Error("post Not Found to Update")
    }

    

    // check for user 

    if(!req.user){
        return res.status(401).json({message:"not authraize"})
    }

    // make sure the loged user matches the user
    if(post.user.toString() !== req.user.id){
        return res.status(401).json("user not authrized")
    }


    const updatePost = await PostModel.findByIdAndUpdate(req.params.id , req.body, {
        new:true,
    })

    res.status(200).json(updatePost)
})



export const delPost = asyncHandler(async (req , res)=>{
    const  post = await PostModel.findById(req.params.id)
    res.status(200).json({message:`Delete post ${req.params.id}`})
    if(!post){
        res.status(400)
        throw new Error("post Not Found to Delete")
    }

 

    // check for user 

    if(!req.user){
        return res.status(401).json({message:"not authraize"})
    }

    // make sure the loged user matches the user
    if(post.user.toString() !== req.user.id){
        return res.status(401).json("user not authrized")
    }


    await post.remove()

    res.status(200).json({id:req.params.id})
})



