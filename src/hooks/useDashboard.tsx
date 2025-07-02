import { QueryResult } from '@apollo/client';
import { CurrentUserWorkoutFragment, GetUserCycleProgressQuery, GetWhoopDataQuery, MuscleGroupFragment, useGetUserCycleProgressQuery, useGetWhoopDataQuery, WorkoutItemFragment } from '../generated/graphql';
import { formatProgramName } from './usePrograms';
import { WorkoutStatus } from '../types';
import { useAuth } from './useAuth';
import { filterMuscleGroups } from './utils';

type Program = GetUserCycleProgressQuery['programs'][0]
export type CurrentProgram = Omit<Program, 'name'> & { cycleId: string, name: string | null }

export type TimelineItem =
  | CurrentUserWorkoutFragment["workout"]["first"][0]
  | CurrentUserWorkoutFragment["workout"]["rest"][0]
  | CurrentUserWorkoutFragment["workout"]["titles"][0]

export type CurrentWorkout = CurrentUserWorkoutFragment["workout"] & {
  items: TimelineItem[]
  muscleGroups: MuscleGroupFragment[]
}

export type DashboardContent = {
  userCycle: GetUserCycleProgressQuery['userCycle'][0] | null
  currentProgram: CurrentProgram | null
  currentWorkout: CurrentWorkout | null
  cycleProgression: number | null
  completedWorkouts: number | null
  programs: GetUserCycleProgressQuery['programs'][0][] | null
  integrations: GetWhoopDataQuery['integrations'] | null
};

type UseUserContext = DashboardContent & {
  loading: boolean
  error: QueryResult['error']
}

const getDashboardData = (
  data: GetUserCycleProgressQuery | undefined,
  whoopData: GetWhoopDataQuery | undefined
): DashboardContent => {
  if (!data) return {
    userCycle: null,
    currentProgram: null,
    currentWorkout: null,
    cycleProgression: null,
    completedWorkouts: null,
    programs: null,
    integrations: null,
  };

  const userCycle = data.userCycle[0];
  const { cycle } = userCycle;

  const currentProgram = {
    ...cycle.program,
    cycleId: cycle.id,
    name: formatProgramName(cycle.program.name)
  }

  const workout: CurrentUserWorkoutFragment["workout"] = data.current[0].workout;
  const items = workout ? [...workout.first, ...workout.rest, ...workout.titles] : []

  const filteredMuscleGroups = workout?.muscleGroup
    .flatMap((i) => i.exercise_details.map((m) => m.exercise?.muscle_group))
    .filter((muscleGroup): muscleGroup is MuscleGroupFragment => !!muscleGroup)

  const currentWorkout = {
    ...workout,
    items: items.sort((a, b) => parseInt(a.id) - parseInt(b.id)),
    muscleGroups: filterMuscleGroups(filteredMuscleGroups) ?? []
  }

  const totalWorkouts = cycle?.user_workouts?.length ?? 0
  const completedWorkouts = cycle?.user_workouts?.filter((w) => w.status !== WorkoutStatus.PENDING).length ?? 0

  return {
    userCycle,
    currentProgram,
    currentWorkout,
    cycleProgression: cycle?.total ? (completedWorkouts / totalWorkouts) * 100 : 0,
    completedWorkouts,
    programs: data.programs,
    integrations: whoopData?.integrations ?? null
  }
}


export const useDashboard = (): UseUserContext => {
  const { user } = useAuth()

  const { data, loading, error } = useGetUserCycleProgressQuery({
    variables: { userId: String(user?.id) }
  })

  const { data: whoopData } = useGetWhoopDataQuery({
    variables: { userId: String(user?.id) }
  })

  return ({
    ...getDashboardData(data, whoopData),
    loading,
    error
  })
}
