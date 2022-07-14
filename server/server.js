import path from 'path';
import {fileURLToPath} from 'url';

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Post from './routes/PostsRoute.js'
import User from './routes/UserRoute.js'
import errorHandler from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

import connectDB from './config/db.js'

const port = process.env.PORT || 5000
const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)


app.use('/api/post' , Post)

app.use('/api/user' , User)

// server client

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname , '../client/build')))
    app.get('*' , (req , res) => res.sendFile(path.resolve(__dirname , '../' , 'client' , 'build' , 'index.html')) )
}else{
    app.get('/' , (req,res)=> res.send("production"))
}



app.listen(port, () => console.log(`Example app listening on port ${port}!`))