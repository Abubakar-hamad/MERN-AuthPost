import express from 'express'
import { GetPosts, AddPost , editPost , delPost } from '../controllers/PostController.js'
import protect from '../middleware/authMiddleware.js'


const router = express.Router()

router.get('/', protect , GetPosts )

router.post('/create' , protect , AddPost)


router.put('/update/:id' , protect , editPost)

router.delete('/del/:id' , protect , delPost)

export default router