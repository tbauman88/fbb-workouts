import { useQuery } from '@apollo/client'
import { GET_DASHBOARD_DATA_FOR_USER } from '../graphql/queries'
import { PROGRAM_NAME_MAP } from '../hooks/usePrograms'
import { UserEntity, WorkoutEntity, CycleEntity } from '../graphql/types'

interface DashboardData {
  user_cycles: {
    id: string
    start_date: string
    current_workout: string
    user: Pick<UserEntity, 'id' | 'name' | 'email' | 'image_url'>
    workout: Pick<WorkoutEntity, 'id' | 'title'> & {
      first: Pick<WorkoutItemEntity, 'id' | 'header', 'notes'>[]
      rest: Pick<WorkoutItemEntity, 'id' | 'header'>[]
    }
    cycle: Pick<CycleEntity, 'id' | 'name' | 'image'> & {
      workouts: Pick<WorkoutEntity, 'id'>[]
      total: number
    }
  }[]
  programs: Pick<ProgramEntity, 'id' | 'name' | 'image'>[]
}

export const useDashboard = (id: number) => {
  const { data, loading, error } = useQuery<DashboardData>(GET_DASHBOARD_DATA_FOR_USER, {
    variables: { userId: String(id) }
  })

  if (loading) return { loading: true }
  if (error) return { error: error.message }

  const { completed_workouts, cycle, workout } = data.userCycle

  const currentUser = { ...data.userCycle, total: cycle.total }

  const currentProgram = {
    ...cycle.program,
    cycleId: cycle.id,
    name: cycle.program ? PROGRAM_NAME_MAP[cycle.program.name] || cycle.program.name : null
  }

  const currentWorkout = {
    ...workout,
    items: [...workout.first, ...workout.rest]
  }

  return {
    currentUser,
    currentProgram,
    currentWorkout,
    currentWorkoutIndex: completed_workouts.length,
    cycleProgression: cycle.workouts.length ? (completed_workouts.length / cycle.workouts.length) * 100 : 0,
    programs: data.programs,
    loading,
    error
  }
}
