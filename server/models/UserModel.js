import mongoose from "mongoose";

const userScheema = mongoose.Schema({
   name:{
    type:String,
    required:[true , 'Please Enter Name']
   } ,

   email:{
    type:String ,
    required:[true , 'Please Enter Email']
   } ,

   password:{
    type:String,
    required:[true , 'Pleade Enter Password']
   },


},
    {
        timestapms:true
    }
)


const UserModel = mongoose.model("Users" , userScheema)

export default UserModel