import Order from '../models/Order.js'

// GET all orders (admin)
export const getOrders = async (req, res) => {
  const orders = await Order.find()
    .populate('user')
    .populate('products.product')
  res.json(orders)
}

// GET single order
export const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('user')
    .populate('products.product')
  res.json(order)
}

// GET orders for the logged-in user
export const getMyOrders = async (req, res) => {
  const userId = req.user._id // make sure your auth middleware sets req.user
  const orders = await Order.find({ user: userId }).populate('products.product')
  res.json(orders)
}

// CREATE new order
export const createOrder = async (req, res) => {
  const { products, total } = req.body
  const newOrder = await Order.create({ user: req.user._id, products, total })
  res.status(201).json(newOrder)
}

// UPDATE order
export const updateOrder = async (req, res) => {
  const updated = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updated)
}

// DELETE order
export const deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id)
  res.json({ message: 'Order deleted' })
}
