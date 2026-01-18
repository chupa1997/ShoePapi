import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={`http://localhost:3000/${product.images[0]}`}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.price} BHD</p>
      <Link to={`/products/${product._id}`}>View</Link>
    </div>
  )
}
