import React, { createContext, useContext } from 'react'
import { UserEntity, ProgramEntity, WorkoutEntity } from '../types'
import { useDashboard } from '../hooks/useDashboard'
interface UserContextType {
  user: UserEntity | null
  currentProgram: ProgramEntity | null
  currentWorkout: WorkoutEntity | null
  currentWorkoutIndex: number
  cycleProgression: number
  loading: boolean
  error: Error | null
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ user: UserEntity; children: React.ReactNode }> = ({ user, children }) => {
  const {
    currentUser,
    programs,
    currentProgram,
    currentWorkout,
    currentWorkoutIndex,
    cycleProgression,
    loading,
    error
  } = useDashboard(user.id)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        programs,
        currentProgram,
        currentWorkout,
        currentWorkoutIndex,
        cycleProgression,
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
