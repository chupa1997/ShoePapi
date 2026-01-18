import { useEffect, useState } from 'react'
import { getAllUsers } from '../../api/users'
import AdminSidebar from '../components/AdminSidebar'

export default function AdminUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers().then(setUsers)
  }, [])

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
