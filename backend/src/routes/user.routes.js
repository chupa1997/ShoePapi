import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { admin } from '../middleware/admin.middleware.js'
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', protect, admin, getUsers)
router.put('/me', protect, updateUser)
router.delete('/:id', protect, admin, deleteUser)

export default router
