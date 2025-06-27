import { createContext, useState, useContext } from 'react'
import { useCheckUserCredentialsLazyQuery, CheckUserCredentialsQuery } from '../generated/graphql'

type User = CheckUserCredentialsQuery['users'][number] | null

const AuthContext = createContext<{
  isAuthenticated: boolean
  user: User
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}>({
  isAuthenticated: false,
  user: null,
  login: async () => false,
  logout: async () => { }
})

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000

const getStoredAuth = (): User => {
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem('auth')
  if (!stored) return null

  const { expiry, user } = JSON.parse(stored)

  if (Date.now() > expiry) {
    localStorage.removeItem('auth')
    return null
  }

  return user
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(getStoredAuth())
  const isAuthenticated = !!user

  const [checkCredentials] = useCheckUserCredentialsLazyQuery()

  const login = async (email: string, password: string) => {
    try {
      const result = await checkCredentials({
        variables: {
          email,
          password
        }
      })

      const user = result.data?.users[0]

      if (user) {
        const authData = { expiry: Date.now() + ONE_WEEK, user }
        localStorage.setItem('auth', JSON.stringify(authData))
        setUser(user)
        return true
      } else {
        // Invalid credentials - no user found
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = async () => {
    localStorage.removeItem('auth')
    setUser(null)
  }

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
