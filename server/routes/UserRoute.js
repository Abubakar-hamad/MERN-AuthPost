import express, { json } from 'express'
import { getMe, loginUser, registerUser } from '../controllers/UserControl.js'
import protect from '../middleware/authMiddleware.js'


const router = express.Router()


router.post('/login' ,  loginUser)

router.post('/register/' , registerUser)

router.get('/me/' , protect , getMe)

// router.delete('/' , )

export default router