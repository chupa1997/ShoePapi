import { useState, useContext } from 'react'
import { loginUser } from '../api/auth'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { setUser } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userData = await loginUser({ email, password })
      setUser(userData)
      navigate('/')
    } catch (err) {
      alert('Login failed')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  )
}
