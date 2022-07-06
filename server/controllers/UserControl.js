import UserModel from "../models/UserModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'


export const registerUser = asyncHandler(async(req, res)=>{
    const {name , email , password} = req.body
    // if one field empty
    if(!name || !email || !password){
        return res.status(400).json({message:"please add all fields"})
    }

    // check if user exsist
    const userExist = await UserModel.findOne({email})
    if(userExist){
       return res.status(400).json({message:"user already exsist"})
    }

    //hash passord
    const salt = await bcrypt.genSalt(10)
    const  hashedPassword = await bcrypt.hash(password , salt)
    
    //create user

    const user = await UserModel.create({
       name , 
       email ,
       password:hashedPassword ,
       
    })

    if(user){
        res.status(201).json({
            _id : user.id , 
            name : user.name , 
            email:user.email , 
            token:generateToken(user._id)


        })
    }else{
        res.status(400).json({message:"invalid user data"})
    }

   

})





export const loginUser = asyncHandler(async(req , res)=>{
    const {email , password} = req.body
    const user = await UserModel.findOne({email})
    // check User
    if(user && (await bcrypt.compare(password , user.password))){
        res.json({
            _id:user.id ,
            name:user.name ,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        return res.status(400).json({message:"error data insert"})
    }
})




export const getMe = asyncHandler(async(req,res)=>{

    const {_id  ,name , email}  = await UserModel.findById(req.user.id)

    res.status(200).json({
        id:_id,
        name , 
        email
    })
})




// generate jwt
const generateToken = (id)=>{
    return jwt.sign({id} , process.env.JWT_SECRET , {expiresIn:'1d'})
}