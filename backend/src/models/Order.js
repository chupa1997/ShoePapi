import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 }
      }
    ],
    total: { type: Number },
    status: { type: String, default: 'pending' } // pending | completed | cancelled
  },
  { timestamps: true }
)

export default mongoose.model('Order', orderSchema)
