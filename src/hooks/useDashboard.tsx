import { QueryResult } from '@apollo/client';
import { GetUserCycleProgressQuery, useGetUserCycleProgressQuery } from '../generated/graphql';
import { formatProgramName } from './usePrograms';
import { WorkoutStatus } from '../types';
import { useAuth } from './useAuth';

type Workout = GetUserCycleProgressQuery['userCycle'][0]['workout']
type Program = GetUserCycleProgressQuery['userCycle'][0]['cycle']['program']
type CurrentWorkoutItems = Array<Workout['first'][0] | Workout['rest'][0] | Workout['titles'][0]>

type UserCycle = GetUserCycleProgressQuery['userCycle'][0]
type CurrentWorkout = Workout & { items: CurrentWorkoutItems }
export type CurrentProgram = Omit<Program, 'name'> & { cycleId: string, name: string | null }
type Programs = GetUserCycleProgressQuery['programs'][0]

export type DashboardContent = {
  userCycle: UserCycle | null
  currentProgram: CurrentProgram | null
  currentWorkout: CurrentWorkout | null
  cycleProgression: number | null
  completedWorkouts: number | null
  programs: Programs[] | null
};

type UseUserContext = DashboardContent & {
  loading: boolean
  error: QueryResult['error']
}


const getDashboardData = (data: GetUserCycleProgressQuery | undefined): DashboardContent => {
  if (!data) return {
    userCycle: null,
    currentProgram: null,
    currentWorkout: null,
    cycleProgression: null,
    completedWorkouts: null,
    programs: null
  };

  const userCycle = data.userCycle[0] || null;
  const { cycle, workout } = userCycle || {};

  const currentProgram = {
    ...cycle.program,
    cycleId: cycle.id,
    name: formatProgramName(cycle.program.name)
  }

  const items = workout ? [...workout.first, ...workout.rest, ...workout.titles] : []

  const currentWorkout = {
    ...workout,
    items: items.sort((a, b) => parseInt(a.id) - parseInt(b.id))
  }

  const userWorkouts = cycle?.user_workouts

  const totalWorkouts = userWorkouts?.length ?? 0
  const completedWorkouts = userWorkouts?.filter((w) => w.status !== WorkoutStatus.PENDING).length ?? 0

  const cycleProgression = cycle?.total ? (completedWorkouts / totalWorkouts) * 100 : 0

  return {
    userCycle,
    currentProgram,
    currentWorkout,
    cycleProgression,
    completedWorkouts,
    programs: data.programs
  }
}

export const useDashboard = (): UseUserContext => {
  const { user } = useAuth()

  const { data, loading, error } = useGetUserCycleProgressQuery({
    variables: { userId: String(user?.id) }
  })


  return ({
    ...getDashboardData(data),
    loading,
    error
  })
}
