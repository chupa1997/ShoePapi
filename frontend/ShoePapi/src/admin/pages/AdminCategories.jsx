import { useEffect, useState } from 'react'
import { getCategories, deleteCategory } from '../../api/categories'
import AdminSidebar from '../components/AdminSidebar'

export default function AdminCategories() {
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    const data = await getCategories()
    setCategories(data)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleDelete = async (id) => {
    if (confirm('Delete this category?')) {
      await deleteCategory(id)
      fetchCategories()
    }
  }

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <h1>Categories</h1>
        <button>Add Category</button>
        <ul>
          {categories.map((c) => (
            <li key={c._id}>
              {c.name}{' '}
              <button onClick={() => handleDelete(c._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
