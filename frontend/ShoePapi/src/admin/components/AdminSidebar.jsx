import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2>Admin</h2>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/categories">Categories</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
      </ul>
    </aside>
  )
}
