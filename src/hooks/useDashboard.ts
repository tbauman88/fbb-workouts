import { useQuery } from '@apollo/client'
import { GET_DASHBOARD_DATA_FOR_USER } from '../graphql/queries'
import { PROGRAM_NAME_MAP } from '../hooks/usePrograms'
import { UserEntity, WorkoutEntity, CycleEntity } from '../graphql/types'

interface DashboardData {
  user_cycles: {
    id: string
    start_date: string
    current_workout: string
    user: Partial<UserEntity>
    workout: Partial<WorkoutEntity>
    cycle: Partial<CycleEntity> & {
      workouts: { id: string }[]
    }
  }[]
}

export const useDashboard = (id: number) => {
  const { data, loading, error } = useQuery<DashboardData>(GET_DASHBOARD_DATA_FOR_USER, {
    variables: { userId: String(id) }
  })

  if (loading) return { loading: true }
  if (error) return { error: error.message }

  const { workouts, program, total } = data.userCycle.cycle

  const currentUser = { ...data.userCycle, total }

  const currentProgram = {
    ...program,
    name: program ? PROGRAM_NAME_MAP[program.name] || program.name : null
  }

  const currentWorkoutIndex = workouts.findIndex((w) => w.id === data.userCycle.current_workout)

  const cycleProgression = workouts.length ? (currentWorkoutIndex / workouts.length) * 100 : 0

  const currentWorkout = {
    ...data.userCycle.workout,
    items: [...data.userCycle.workout.first, ...data.userCycle.workout.rest]
  }

  return {
    currentUser,
    currentProgram,
    currentWorkout,
    currentWorkoutIndex,
    cycleProgression,
    loading,
    error
  }
}
