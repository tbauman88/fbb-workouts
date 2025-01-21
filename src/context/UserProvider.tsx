import React, { createContext, useContext } from 'react'
import { UserEntity, ProgramEntity, WorkoutEntity } from '../types'
import { useDashboard } from '../hooks/useDashboard'
interface UserContextType {
  user: UserEntity | null
  currentProgram: ProgramEntity | null
  currentWorkout: WorkoutEntity | null
  currentWorkoutIndex: number
  cycleProgression: number
  completedWorkouts: number[]
  loading: boolean
  error: Error | null
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ user: UserEntity; children: React.ReactNode }> = ({ user, children }) => {
  const {
    programs,
    currentProgram,
    currentWorkout,
    currentWorkoutIndex,
    completedWorkouts,
    cycleProgression,
    loading,
    error
  } = useDashboard(user.id)

  return (
    <UserContext.Provider
      value={{
        user,
        programs,
        currentProgram,
        currentWorkout,
        currentWorkoutIndex,
        cycleProgression,
        completedWorkouts,
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
