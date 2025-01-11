import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import { UserEntity, ProgramEntity, WorkoutEntity } from "../types";

export const useUser = (id: number) => {
  const { data, loading, error } = useQuery<{
    users_by_pk: UserEntity | null;
    currentProgram: ProgramEntity | null;
    currentWorkout: WorkoutEntity | null;
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
