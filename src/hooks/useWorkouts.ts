import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../graphql/queries";

interface Workout {
  id: number;
  title: string;
  subtitle: string;
  poster: string;
  isRestDay: boolean;
  isActiveRecovery: boolean;
  description: string;
  date: string;
  cycle: number;
}

interface WorkoutsData {
  workouts: Workout[];
}

export const useWorkouts = () => {
  const { loading, error, data } = useQuery<WorkoutsData>(GET_WORKOUTS);

  return {
    workouts: data?.workouts || [],
    loading,
    error
  };
};
