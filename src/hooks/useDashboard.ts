import { useQuery } from '@apollo/client'
import { GET_DASHBOARD_DATA } from '../graphql/queries'
import { PROGRAM_NAME_MAP } from '../hooks/usePrograms'

interface DashboardData {
  user_cycles: {
    id: string
    start_date: string
    current_workout: string
    user: Partial<UserEntity>
    workout: Partial<WorkoutEntity>
    cycle: Partial<CycleEntity>
  }[]
}

export const useDashboard = (id: number) => {
  const { data, loading, error } = useQuery<DashboardData>(GET_DASHBOARD_DATA, {
    variables: { userId: String(id) }
  })

  const userCycle = { ...data?.user_cycles[0] }

  const currentUser = { ...userCycle, workouts: userCycle?.cycle?.workout_count }

  const currentProgram = {
    ...userCycle?.cycle?.program,
    name: userCycle?.cycle?.program
      ? PROGRAM_NAME_MAP[userCycle?.cycle?.program.name] || userCycle?.cycle?.program.name
      : null
  }

  return {
    currentUser: currentUser || null,
    currentProgram: currentProgram || null,
    currentWorkout: userCycle?.workout || null,
    loading,
    error
  }
}
