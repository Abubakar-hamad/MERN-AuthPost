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

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)


app.use('/api/post' , Post)

app.use('/api/user' , User)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))