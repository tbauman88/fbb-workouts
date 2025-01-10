import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

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

interface Program {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Cycle {
  id: number;
  cycle_number: number;
  date: string;
  bridge_week: boolean;
  program: Program;
  workouts: Workout[];
}

interface UserCycle {
  id: number;
  cycle_id: number;
  current_workout: number;
  start_date: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
  cycle: Cycle;
}

interface User {
  id: number;
  email: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  user_cycles: UserCycle[];
}

interface UserData {
  user: User | null;
  currentProgram: Program | null;
  currentWorkout: Workout | null;
}

export const useUser = (id: number) => {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { id: String(id) }
  });

  // Add null checks
  const user = data?.users_by_pk || null;
  const userCycles = user?.user_cycles || [];

  const currentProgram = userCycles[0]?.cycle?.program || null;
  const currentWorkout = userCycles[0]?.current_workout || null;

  return {
    user,
    currentProgram,
    currentWorkout,
    loading,
    error
  };
};
