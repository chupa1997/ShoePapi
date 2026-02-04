import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  const nav = useNavigate()
  const [user, setUser] = useState(null)
  const [err, setErr] = useState('')

  const logout = () => {
    localStorage.removeItem('token')
    nav('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      nav('/login')
      return
    }

    ;(async () => {
      try {
        const res = await api.get('/auth/me')
        setUser(res.data)
      } catch (e) {
        setErr('Session expired, please login again.')
        localStorage.removeItem('token')
        nav('/login')
      }
    })()
  }, [nav])

  if (!user)
    return <p style={{ textAlign: 'center', marginTop: 40 }}>Loading...</p>

  return (
    <>
      <Navbar user={user} />

      <div style={{ maxWidth: 720, margin: '40px auto' }}>
        <h2>Home</h2>
        <p>
          Welcome, <b>{user.name}</b>
        </p>
        <p>{user.email}</p>
      </div>
    </>
  )
}
