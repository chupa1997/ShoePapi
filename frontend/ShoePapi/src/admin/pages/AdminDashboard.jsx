import AdminSidebar from '../components/AdminSidebar'

export default function AdminDashboard() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <h1>Welcome, Admin!</h1>
        <p>Here you can manage products, categories, users, and orders.</p>
      </main>
    </div>
  )
}
