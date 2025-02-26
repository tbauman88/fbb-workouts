import { createContext, useState, useContext } from 'react'
import { useLazyQuery } from '@apollo/client'
import { AuthContextType, UserEntity } from '../types'
import { CHECK_USER_CREDENTIALS } from '../graphql/queries'

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: {} as UserEntity,
  login: async () => false,
  logout: async () => { }
})

const ONE_WEEK = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const getStoredAuth = () => {
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

  const [user, setUser] = useState<UserEntity>(getStoredAuth())
  const isAuthenticated = !!user

  const [checkCredentials] = useLazyQuery(CHECK_USER_CREDENTIALS, {
    onCompleted: (data) => {
      if (data.users.length > 0) {
        const user = data.users[0]
        const authData = { expiry: Date.now() + ONE_WEEK, user }

        localStorage.setItem('auth', JSON.stringify(authData))
        setUser(user)
      } else {
        throw new Error('Invalid credentials')
      }
    },
    onError: (error) => {
      console.error('Login error:', error)
      throw new Error('An error occurred during login')
    }
  })

  const login = async (email: string, password: string) => {
    try {
      await checkCredentials({
        variables: {
          email,
          password
        }
      })
      return true
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
