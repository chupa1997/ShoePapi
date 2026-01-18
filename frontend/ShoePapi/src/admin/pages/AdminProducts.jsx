import { useEffect, useState } from 'react'
import { getProducts, deleteProduct } from '../../api/products'
import AdminSidebar from '../components/AdminSidebar'

export default function AdminProducts() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id)
      fetchProducts()
    }
  }

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <h1>Products</h1>
        <button>Add Product</button>
        <div className="products-grid">
          {products.map((p) => (
            <div key={p._id} className="product-card">
              <img src={`http://localhost:5000/${p.images[0]}`} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.price} BHD</p>
              <button>Edit</button>
              <button onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
