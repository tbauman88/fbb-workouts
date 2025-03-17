import { useGetWorkoutsQuery } from '../generated/graphql'

export const useWorkouts = (cycleId: number) => {
  const { data, loading, error } = useGetWorkoutsQuery({
    variables: { cycleId }
  })

  // const transformedWorkouts =
  //   data?.workouts.map(({ items, ...workout }) => ({
  //     ...workout,
  //     notes: items[0]?.notes || null
  //   })) || []

  return {
    workouts: data?.workouts,
    loading,
    error
  }
}
