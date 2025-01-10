import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../graphql/queries";

interface Workout {
  id: string;
  title: string;
  date: string;
  subtitle: string;
  cycle: number;
}

interface WorkoutsData {
  workouts: Workout[];
}

export const useWorkouts = () => {
  const { loading, error, data } = useQuery<WorkoutsData>(GET_WORKOUTS);

  return {
    items: data?.workouts || [],
    loading,
    error
  };
};
