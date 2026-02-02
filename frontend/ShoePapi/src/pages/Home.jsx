import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const logout = () => {
    localStorage.removeItem('token')
    nav('/login')
  }

  useEffect(() => {
    ;(async () => {
      try {
        const res = await api.get('/auth/me')
        setUser(res.data)
      } catch (e) {
        // غير مسجّل دخول
        nav('/login')
      } finally {
        setLoading(false)
      }
    })()
  }, [nav])

  if (loading)
    return <p style={{ textAlign: 'center', marginTop: 40 }}>Loading...</p>

  return (
    <div style={{ maxWidth: 720, margin: '40px auto' }}>
      <h2>Home</h2>
      <p>
        Welcome, <b>{user?.name}</b>
      </p>
      <p>{user?.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  )
}
