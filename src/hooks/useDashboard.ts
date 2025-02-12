import { useQuery } from '@apollo/client'
import { GET_DASHBOARD_DATA_FOR_USER } from '../graphql/queries'
import { PROGRAM_NAME_MAP } from './usePrograms'
import { GetUserCycleProgress } from '../generated/graphql'

type DashboardData = {
  userCycle: GetUserCycleProgress['userCycle'][0]
  currentProgram: {
    id: string
    name: string
  }
  currentWorkout: {
    id: string
    title: string
    items: {
      id: string
      header: string
      notes: string
    }[]
  }
  cycleProgression: number
  completedWorkouts: number
  programs: {
    id: string
    name: string
    image: string
  }[]
  loading: boolean
  error: Error | null
}

export const useDashboard = (id: number): DashboardData => {
  const { data, loading, error } = useQuery<GetUserCycleProgress>(GET_DASHBOARD_DATA_FOR_USER, {
    variables: { userId: String(id) }
  })

  if (loading) return { loading: true }
  if (error) return { error: error.message }
  if (!data) return { error: 'No data' }

  const { cycle, workout } = data.userCycle[0];

  const currentProgram = {
    ...cycle.program,
    cycleId: cycle.id,
    name: cycle.program ? PROGRAM_NAME_MAP[cycle.program.name] || cycle.program.name : null
  }

  const items = [...workout.first, ...workout.rest, ...workout.titles]

  const currentWorkout = {
    ...workout,
    items: items.sort((a, b) => parseInt(a.id) - parseInt(b.id))
  }

  const completedWorkouts = cycle.user_workouts_aggregate?.aggregate?.count ?? 0
  const cycleProgression = cycle.total ? (completedWorkouts / cycle.total) * 100 : 0

  return {
    userCycle: data.userCycle,
    currentProgram,
    currentWorkout,
    cycleProgression,
    completedWorkouts,
    programs: data.programs,
    loading,
    error: error?.message || null
  }
}
