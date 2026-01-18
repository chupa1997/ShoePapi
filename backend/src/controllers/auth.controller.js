import User from '../models/User.js'
import { hashPassword, comparePassword } from '../utils/hashPassword.js'
import { generateToken } from '../utils/generateToken.js'

export const register = async (req, res) => {
  try {
    const { name, email, password, region, phone } = req.body
    const exists = await User.findOne({ email })
    if (exists) return res.status(400).json({ message: 'User already exists' })

    const hashed = await hashPassword(password)
    const user = await User.create({
      name,
      email,
      password: hashed,
      region,
      phone
    })
    const token = generateToken(user)

    res.status(201).json({ user, token })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })

    const match = await comparePassword(password, user.password)
    if (!match) return res.status(400).json({ message: 'Invalid credentials' })

    const token = generateToken(user)
    res.json({ user, token })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
