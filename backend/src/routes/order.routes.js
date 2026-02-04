import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { admin } from '../middleware/admin.middleware.js'
import {
  getOrders,
  getOrder,
  getMyOrders,
  createOrder,
  updateOrder,
  deleteOrder
} from '../controllers/order.controller.js'
const router = express.Router()

router.post('/', protect, createOrder)
router.get('/me', protect, getMyOrders)
router.get('/', protect, admin, getOrders)
router.put('/:id', protect, admin, updateOrder)
router.delete('/:id', protect, admin, deleteOrder)

export default router
