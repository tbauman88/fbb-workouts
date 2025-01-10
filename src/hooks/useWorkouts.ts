import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../graphql/queries";

export const useWorkouts = (cycleId: number) => {
  const { data, loading, error } = useQuery<{ workouts: Workout[] }>(
    GET_WORKOUTS,
    {
      variables: { cycleId }
    }
  );

  const transformedWorkouts =
    data?.workouts.map(({ workout_items, ...workout }) => ({
      ...workout,
      notes: workout_items[0]?.notes || null
    })) || [];

  return {
    workouts: transformedWorkouts,
    loading,
    error
  };
};
