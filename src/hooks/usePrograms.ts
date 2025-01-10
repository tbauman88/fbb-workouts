import { useQuery } from "@apollo/client";
import { GET_PROGRAMS } from "../graphql/queries";

export const usePrograms = () => {
  const { loading, error, data } = useQuery<{
    programs: Program[];
  }>(GET_PROGRAMS);

  return {
    programs: data?.programs || [],
    loading,
    error
  };
};
