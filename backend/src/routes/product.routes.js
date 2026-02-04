import express from 'express'
import { upload } from '../middleware/upload.middleware.js'
import {
  getProducts,
  createProduct
} from '../controllers/product.controller.js'

const router = express.Router()

router.get('/', getProducts)
router.post('/', upload.array('images', 5), createProduct) // handle up to 5 images

export default router
