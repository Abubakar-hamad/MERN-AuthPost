import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'


const protect = asyncHandler(async(req , res , next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token , process.env.JWT_SECRET)
      
            // get user from token

            req.user = await UserModel.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error)
            res.status(401).json({message:"not authorize"})
        }   
    }

    if(!token){
        res.status(401).json({message:"not authrize no token "})
    }
})


export default protect