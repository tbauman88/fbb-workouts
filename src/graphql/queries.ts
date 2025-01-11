import { gql } from "@apollo/client";

export const GET_WORKOUTS = gql`
  query GetWorkouts($cycleId: Int!) {
    workouts(where: { cycle: { _eq: $cycleId } }, order_by: { subtitle: asc }) {
      id
      title
      subtitle
      poster
      isRestDay
      isActiveRecovery
      description
      date
      cycle
      workout_items(limit: 1, order_by: { created_at: asc }) {
        notes
      }
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

export const GET_PROGRAMS = gql`
  query GetPrograms {
    programs(order_by: [{ id: asc }]) {
      id
      name
      description
      image
      cycles {
        workouts(limit: 1) {
          id
          cycle
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: bigint!) {
    users_by_pk(id: $id) {
      id
      email
      image_url
      created_at
      updated_at
      user_cycles(order_by: { created_at: desc }) {
        id
        cycle_id
        current_workout
        start_date
        completed
        created_at
        updated_at
        cycle {
          id
          cycle_number
          date
          bridge_week
          program {
            id
            name
            description
            image
          }
          workouts(order_by: { subtitle: asc }) {
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
      }
    }
  }
`;
