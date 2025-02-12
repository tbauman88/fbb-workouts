import React, { createContext, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_DASHBOARD_DATA_FOR_USER } from '../graphql/queries'
import { PROGRAM_NAME_MAP } from '../hooks/usePrograms'
import { GetUserCycleProgress } from '../generated/graphql'

type Workout = GetUserCycleProgress['userCycle'][0]['workout']
type Program = GetUserCycleProgress['userCycle'][0]['cycle']['program']

export type UserCycle = GetUserCycleProgress['userCycle'][0]
export type CurrentWorkout = Workout & { items: Array<Workout['first'][0] | Workout['rest'][0] | Workout['titles'][0]> }
export type CurrentProgram = Omit<Program, 'name'> & { cycleId: string, name: string | null }
type Programs = GetUserCycleProgress['programs'][0]

type DashboardData = {
  data: {
    userCycle: UserCycle | undefined
    currentProgram: CurrentProgram | undefined
    currentWorkout: CurrentWorkout | undefined
    cycleProgression: number | undefined
    completedWorkouts: number | undefined
    programs: Programs[] | undefined
  }
  loading: boolean
  error: Error | undefined
}

const UserContext = createContext<DashboardData | undefined>(undefined)

const useDashboardData = (data: GetUserCycleProgress | undefined): DashboardData['data'] => {
  if (!data) return {
    userCycle: undefined,
    currentProgram: undefined,
    currentWorkout: undefined,
    cycleProgression: undefined,
    completedWorkouts: undefined,
    programs: undefined,
    
  }

  const { cycle, workout } = data?.userCycle[0] || {}

  const currentProgram = {
    ...cycle?.program,
    cycleId: cycle?.id,
    name: cycle?.program ? PROGRAM_NAME_MAP[cycle.program.name] || cycle.program.name : null
  }

  const items = workout ? [...workout.first, ...workout.rest, ...workout.titles] : []

  const currentWorkout = {
    ...workout,
    items: items.sort((a, b) => parseInt(a.id) - parseInt(b.id))
  }

  const completedWorkouts = cycle?.user_workouts_aggregate?.aggregate?.count ?? 0
  const cycleProgression = cycle?.total ? (completedWorkouts / cycle.total) * 100 : 0

  return {
    userCycle: data?.userCycle[0],
    currentProgram,
    currentWorkout,
    cycleProgression,
    completedWorkouts,
    programs: data?.programs,
  }
}

export const UserProvider: React.FC<{
  user: { id: string | number }
  children: React.ReactNode
}> = ({ user, children }) => {
  const { data, loading, error } = useQuery<GetUserCycleProgress>(GET_DASHBOARD_DATA_FOR_USER, {
    variables: { userId: String(user.id) }
  })

  const value: DashboardData = {
    data: useDashboardData(data),
    loading,
    error
  }

  return (
    <UserContext.Provider value={value}>
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
