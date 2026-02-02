import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import categoryRoutes from './routes/category.routes.js'
import orderRoutes from './routes/order.routes.js'
dotenv.config()
const app = express()
console.log('CLIENT_URL:', process.env.CLIENT_URL)

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(cookieParser())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'ShoePapi API running' })
})

export default app
