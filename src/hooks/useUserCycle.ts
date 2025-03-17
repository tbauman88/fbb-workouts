import { useGetCurrentUserCycleQuery } from '../generated/graphql'

export const useUserCycle = (userId: string) => {
  const { data, loading, error } = useGetCurrentUserCycleQuery({
    variables: { userId }
  })

  return {
    data: data?.user?.user_cycles?.[0] ?? null,
    loading,
    error
  }
}
