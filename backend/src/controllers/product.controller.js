import Product from '../models/Product.js'

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category')
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET product by ID
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category')
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// CREATE product
export const createProduct = async (req, res) => {
  try {
    const data = req.body
    if (req.files) data.images = req.files.map((f) => f.filename)
    const product = await Product.create(data)
    res.status(201).json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const data = req.body
    if (req.files) data.images = req.files.map((f) => f.filename)
    const updated = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true
    })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'Product deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
