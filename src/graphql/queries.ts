import { gql } from "@apollo/client";

export const GET_WORKOUTS = gql`
  query GetWorkouts {
    workouts {
      id
      title
      subtitle
      poster
      isRestDay
      isActiveRecovery
      description
      date
      cycle
    }
  }
`;

export const GET_WORKOUT_BY_ID = gql`
  query WorkoutById($id: bigint!) {
    workouts(where: { id: { _eq: $id } }) {
      id
      title
      subtitle
      poster
      isRestDay
      isActiveRecovery
      description
      date
      cycle
      workout_items(order_by: { id: asc }) {
        id
        title
        score
        notes
        header
        exercise_details {
          id
          title
          subtitle
          exercise {
            id
            demo_video_url
            demo_video_title
            demo_video_thumb
            demo_video_poster
            demo_video_id
          }
        }
      }
    }
  }
`;

export const GET_EXERCISES = gql`
  query GetExercises {
    exercises(order_by: [{ demo_video_title: asc }]) {
      id
      demo_video_url
      demo_video_thumb
      demo_video_title
      demo_video_poster
      demo_video_id
    }
  }
`;
