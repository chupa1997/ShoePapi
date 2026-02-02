import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ user }) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>
          👟 ShoePapi
        </Link>
      </div>
      {user?.role === 'admin' && (
        <Link to="/admin" style={styles.link}>
          Admin
        </Link>
      )}

      <div style={styles.right}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/products" style={styles.link}>
          Products
        </Link>

        {user && (
          <>
            <span style={styles.user}>Hi, {user.name}</span>
            <button onClick={logout} style={styles.btn}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    height: 60,
    padding: '0 24px',
    background: '#111',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  left: {
    fontWeight: 'bold',
    fontSize: 20
  },
  logo: {
    textDecoration: 'none',
    color: '#fff'
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: 16
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  user: {
    opacity: 0.8
  },
  btn: {
    background: '#ff4d4d',
    border: 'none',
    color: '#fff',
    padding: '6px 12px',
    cursor: 'pointer',
    borderRadius: 4
  }
}
