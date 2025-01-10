import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "../graphql/queries";

interface Exercise {
  id: number;
  demo_video_url: string;
  demo_video_title: string;
  demo_video_thumb: string;
  demo_video_poster: string;
  demo_video_id: string;
}

interface ExerciseDetail {
  id: number;
  title: string;
  subtitle: string;
  exercise: Exercise;
}

interface WorkoutItem {
  id: number;
  title: string;
  score: string;
  notes: string;
  header: string;
  exercise_details: ExerciseDetail[];
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
}

interface WorkoutData {
  workouts: Workout[];
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
