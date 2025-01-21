import { gql } from '@apollo/client'

export const COMPLETE_WORKOUT = gql`
  mutation CompleteWorkout($completedWorkout: bigint!, $cycleId: bigint!) {
    insert_user_workouts_one(object: { workout_id: $completedWorkout, cycle_id: $cycleId }) {
      id
      workout_id
    }
  }
`

export const ADD_WORKOUT_ITEM_SCORE = gql`
  mutation AddWorkoutItemScore($workoutItemId: bigint!, $score: String) {
    insert_workout_item_scores_one(object: { workout_item_id: $workoutItemId, value: $score }) {
      id
    }
  }
`

export const UPDATE_WORKOUT_ITEM_SCORE = gql`
  mutation UpdateWorkoutItemScore($workoutItemId: bigint!, $score: String = "") {
    update_workout_item_scores(where: { workout_item_id: { _eq: $workoutItemId } }, _set: { value: $score }) {
      returning {
        id
        value
      }
    }
  }
`
