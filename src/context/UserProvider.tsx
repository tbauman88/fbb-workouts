import React, { createContext, useContext } from 'react'
import { UserEntity, ProgramEntity, WorkoutEntity } from '../types'
import { useDashboard } from '../hooks/useDashboard'
interface UserContextType {
  user: UserEntity | null
  currentProgram: ProgramEntity | null
  currentWorkout: WorkoutEntity | null
  loading: boolean
  error: Error | null
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, currentProgram, currentWorkout, loading, error } = useDashboard(1)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        currentProgram,
        currentWorkout,
        loading,
        error
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
