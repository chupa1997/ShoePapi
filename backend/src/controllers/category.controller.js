import Category from '../models/Category.js'

// GET all
export const getCategories = async (req, res) => {
  const categories = await Category.find()
  res.json(categories)
}

// CREATE
export const createCategory = async (req, res) => {
  const category = await Category.create(req.body)
  res.status(201).json(category)
}

// UPDATE
export const updateCategory = async (req, res) => {
  const updated = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updated)
}

// DELETE
export const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id)
  res.json({ message: 'Category deleted' })
}
