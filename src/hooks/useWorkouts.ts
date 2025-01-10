import { useQuery } from "@apollo/client";
import { GET_WORKOUTS } from "../graphql/queries";

interface WorkoutItem {
  notes: string | null;
}

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
  workout_items: WorkoutItem[];
  notes?: string | null;
}

interface WorkoutsData {
  workouts: Workout[];
}

export const useWorkouts = (cycleId: number) => {
  const { data, loading, error } = useQuery<WorkoutsData>(GET_WORKOUTS, {
    variables: { cycleId }
  });

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
