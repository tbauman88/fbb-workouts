import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import { UserEntity } from "../types";

export const useUser = (id: number) => {
  const { data, loading, error } = useQuery<{
    users_by_pk: UserEntity | null;
  }>(GET_USER, {
    variables: { id: String(id) }
  });

  return {
    user: data?.users_by_pk || null,
    loading,
    error
  };
};
