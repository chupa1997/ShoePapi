import { useState } from 'react'
import { api } from '../lib/api'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const nav = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setErr('')
    try {
      await api.post('/auth/register', form)
      nav('/login')
    } catch (error) {
      setErr(error?.response?.data?.message || 'Something went wrong')
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: '40px auto' }}>
      <h2>Register</h2>

      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <br />
        <br />
        <button type="submit">Create Account</button>
      </form>

      {err && <p style={{ color: 'red' }}>{err}</p>}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}
