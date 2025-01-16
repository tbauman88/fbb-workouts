import { gql } from '@apollo/client'

export const COMPLETE_WORKOUT = gql`
  mutation CompleteWorkout($id: bigint!, $currentWorkout: Int!) {
    update_user_cycles_by_pk(pk_columns: { id: $id }, _set: { current_workout: $currentWorkout, updated_at: "now()" }) {
      current_workout
    }
  }
`
