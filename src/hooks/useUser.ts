import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

export const useUser = (id: number) => {
  const { data, loading, error } = useQuery<{
    users_by_pk: User | null;
    currentProgram: Program | null;
    currentWorkout: Workout | null;
  }>(GET_USER, {
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
