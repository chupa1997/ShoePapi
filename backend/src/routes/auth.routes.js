import { Router } from 'express'
import { register, login, me } from '../controllers/auth.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = Router()

router.get('/me', protect, me)
router.post('/register', register)
router.post('/login', login)

export default router
