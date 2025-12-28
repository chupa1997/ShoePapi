import User from '../models/User.js'
import { hashPassword, comparePassword } from '../utils/hashPassword.js'
import { generateToken } from '../utils/generateToken.js'

// REGISTER
export const register = async (req, res) => {
  try {
    const { name, email, password, region, phoneNumber } = req.body

    // check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).json({ message: 'Email already registered' })

    const hashed = await hashPassword(password)

    const user = await User.create({
      name,
      email,
      password: hashed,
      region,
      phoneNumber
    })

    const token = generateToken(user._id)

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })

    const isMatch = await comparePassword(password, user.password)
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' })

    const token = generateToken(user._id)

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
