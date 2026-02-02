import { useState } from 'react'
import { api } from '../lib/api' // axios instance
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // 👈 مهم جدًا

    try {
      await api.post('/api/auth/register', formData)
      navigate('/login') // بعد النجاح
    } catch (err) {
      setError(err.response?.data?.message || 'Register failed')
    }
  }

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
