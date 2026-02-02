import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div>
      <h1 style={{ color: 'red' }}>THIS IS HOME ✅</h1>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  )
}
