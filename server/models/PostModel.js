import mongoose from "mongoose";

const postSchema = mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true ,
    ref:"Users"
   }, 
   text:{
    type:String , 
    required:[true , 'Please enter a text value']
   }
    
} ,
{
    timestamps:true
}
)

const PostModel = mongoose.model("Posts" , postSchema)
export default PostModel
