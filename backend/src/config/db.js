import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    console.log('DB URI CHECK:', process.env.MONGODB_URI)

    await mongoose.connect(process.env.MONGODB_URI)

    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  }
}

export default connectDB
