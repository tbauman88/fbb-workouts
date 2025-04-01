import { GetUserWorkoutsQueryVariables, useGetUserWorkoutsQuery, WorkoutFragment } from '../generated/graphql'
import { QueryResult } from '@apollo/client'
import { WorkoutStatus } from '../types'

type WorkoutItem =
  | WorkoutFragment["workout"]["first"][number]
  | WorkoutFragment["workout"]["rest"][number]
  | WorkoutFragment["workout"]["titles"][number]

type MappedWorkout = WorkoutFragment["workout"] & {
  items: WorkoutItem[]
}

const mapWorkoutData = (workout: WorkoutFragment["workout"]): MappedWorkout => ({
  ...workout,
  items: [...workout.first, ...workout.rest, ...workout.titles],
})

export type UpcomingWorkout = MappedWorkout
export type PastWorkout = MappedWorkout & { status: WorkoutStatus }

type GetUserWorkoutsResult = {
  upcomingWorkouts: UpcomingWorkout[] | null
  pastWorkouts: PastWorkout[] | null
  loading: boolean
  error: QueryResult['error']
}

export const useWorkouts = (variables: GetUserWorkoutsQueryVariables): GetUserWorkoutsResult => {
  const { data, loading, error } = useGetUserWorkoutsQuery({
    variables
  })

  const upcomingWorkouts = data?.upcoming_workouts.map(({ workout }) => mapWorkoutData(workout)) ?? null

  const pastWorkouts = data?.past_workouts.map(({ workout, status }) => ({
    ...mapWorkoutData(workout),
    status: status as WorkoutStatus
  })) ?? null

  return {
    upcomingWorkouts,
    pastWorkouts,
    loading,
    error
  }
}
