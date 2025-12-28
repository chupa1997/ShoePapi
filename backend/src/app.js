import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
)
app.use('/api/auth', authRoutes)

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'ShoePapi API running' })
})

export default app
