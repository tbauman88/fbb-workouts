import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER_CYCLE } from '../graphql/queries'

export const useUserCycle = (userId: number) => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER_CYCLE, {
    variables: { userId }
  })

  return {
    data: data?.user?.user_cycles?.[0] ?? null,
    loading,
    error
  }
}
