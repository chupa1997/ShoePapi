// backend/src/controllers/user.controller.js
import User from '../models/User.js'

// GET all users (admin)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching users', error: err.message })
  }
}

// GET single user (admin)
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err.message })
  }
}

// UPDATE logged-in user
export const updateUser = async (req, res) => {
  try {
    const data = req.body
    if (req.files) data.profileImage = req.files[0].filename
    const updated = await User.findByIdAndUpdate(req.user._id, data, {
      new: true
    })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err.message })
  }
}

// DELETE user (admin)
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'User deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err.message })
  }
}
