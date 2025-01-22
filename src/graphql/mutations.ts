import { gql } from '@apollo/client'

export const COMPLETE_WORKOUT = gql`
  mutation CompleteWorkout($completedWorkout: bigint!, $cycleId: bigint!) {
    insert_user_workouts_one(object: { workout_id: $completedWorkout, cycle_id: $cycleId }) {
      id
      workout_id
    }
  }
`

export const UPSERT_WORKOUT_ITEM_SCORE = gql`
  mutation UpsertWorkoutItemScore($workoutItemId: bigint!, $score: String = "") {
    insert_workout_item_scores(
      objects: [{ workout_item_id: $workoutItemId, value: $score }]
      on_conflict: { constraint: workout_item_scores_pkey, update_columns: [value] }
    ) {
      returning {
        id
        value
      }
    }
  }
`
