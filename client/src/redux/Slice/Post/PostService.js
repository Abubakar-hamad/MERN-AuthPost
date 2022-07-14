import axios from "axios";


const API_URL = '/api/post/'


//creat
const createpost = async (psotData , token)=>{
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const  res = await axios.post(API_URL + 'create' , psotData , config)
    return res.data
}


//getPost

const getpost = async (token)=>{
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const  res = await axios.get(API_URL , config)
    return res.data
}


const del = async(id , token)=>{
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const  res = await axios.delete(API_URL + "del/" + id , config)
    return res.data
}
const  PostService ={
    createpost ,
    getpost,
    del,

} 


export default PostService