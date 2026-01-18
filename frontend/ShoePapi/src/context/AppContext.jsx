import { createContext, useState, useEffect } from 'react'
import { getProfile } from '../api/auth'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  const fetchUser = async () => {
    try {
      const data = await getProfile()
      setUser(data)
    } catch (err) {
      setUser(null)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </AppContext.Provider>
  )
}
