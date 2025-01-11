import { useQuery } from "@apollo/client";
import { GET_PROGRAMS } from "../graphql/queries";
import { ProgramEntity } from "../types";

export const usePrograms = () => {
  const { loading, error, data } = useQuery<{
    programs: ProgramEntity[];
  }>(GET_PROGRAMS);

  const programs = data?.programs.map((program) => ({
    ...program,
    cycles: program.cycles.map((cycle) => ({
      id: cycle.workouts[0].cycle,
      firstWorkoutId: cycle.workouts[0].id
    }))
  }));

  return { programs, loading, error };
};
