import User from '../models/User.js'
import { hashPassword, comparePassword } from '../utils/hashPassword.js'
import { generateToken } from '../utils/generateToken.js'

export const register = async (req, res) => {
  try {
    const { name, email, password, region, phoneNumber } = req.body

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'name, email, password are required' })
    }

    const existing = await User.findOne({ email: email.toLowerCase() })
    if (existing) {
      return res.status(409).json({ message: 'Email already exists' })
    }

    const hashed = await hashPassword(password)

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashed,
      region,
      phoneNumber
    })

    const token = generateToken(user._id)

    return res.status(201).json({
      message: 'Registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage
      }
    })
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'email and password are required' })
    }

    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const ok = await comparePassword(password, user.password)
    if (!ok) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = generateToken(user._id)

    return res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage
      }
    })
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}

export const me = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password')

    if (!user) return res.status(404).json({ message: 'User not found' })

    return res.json(user)
  } catch (err) {
    return res.status(500).json({ message: 'Server error' })
  }
}
