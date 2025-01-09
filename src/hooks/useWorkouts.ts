import { useQuery } from '@apollo/client';
import { GET_WORKOUTS } from '../graphql/queries';

interface Workout {
  title: string;  // Changed from number to string assuming titles are text
  date: string;
  subtitle: string;
  cycle: number;
}

interface WorkoutsData {
  workouts: Workout[];  // Changed from 'items' to 'workouts' to match your schema
}

export const useWorkouts = () => {
  const { loading, error, data } = useQuery<WorkoutsData>(GET_WORKOUTS);

  return {
    items: data?.workouts || [],  // Changed from data?.items to data?.workouts
    loading,
    error
  };
};