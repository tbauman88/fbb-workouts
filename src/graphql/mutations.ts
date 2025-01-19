import { gql } from '@apollo/client'

export const COMPLETE_WORKOUT = gql`
  mutation CompleteWorkout($completedWorkout: bigint!, $cycleId: bigint!) {
    insert_user_workouts_one(object: { workout_id: $completedWorkout, cycle_id: $cycleId }) {
      id
      workout_id
    }
  }
`
