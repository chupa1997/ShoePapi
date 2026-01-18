import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Navbar() {
  const { user } = useContext(AppContext)

  return (
    <nav>
      <Link to="/">ShoePapi</Link>
      <Link to="/products">Products</Link>
      {user ? (
        <>
          <Link to="/profile">{user.name}</Link>
          <Link to="/cart">Cart</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  )
}
