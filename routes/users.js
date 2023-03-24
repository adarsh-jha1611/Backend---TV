import express from 'express'
import { deleteUser, getAllUser,getSingleUser, updateUser } from '../controllers/userController.js'

const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

router.put('/:id',verifyUser,updateUser)
//create new User 

router.delete('/:id',verifyUser,deleteUser)
//create new User 

router.get('/:id',verifyUser,getSingleUser)
//create new User 

router.get('/',verifyAdmin,getAllUser)

export default router