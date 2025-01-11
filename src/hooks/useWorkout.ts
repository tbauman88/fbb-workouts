import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "../graphql/queries";
import { WorkoutEntity } from "../types";

interface WorkoutData {
  workouts: WorkoutEntity[];
}

export const useWorkout = (id: number) => {
  const { data, loading, error } = useQuery<WorkoutData>(GET_WORKOUT_BY_ID, {
    variables: { id: String(id) }
  });

  return {
    workout: data?.workouts[0],
    loading,
    error
  };
};
