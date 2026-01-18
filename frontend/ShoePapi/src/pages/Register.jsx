import { useState, useContext } from 'react'
import { registerUser } from '../api/auth'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const { setUser } = useContext(AppContext)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = await registerUser(form)
      setUser(userData)
      navigate('/')
    } catch {
      alert('Registration failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  )
}
