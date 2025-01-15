import { gql } from '@apollo/client'

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
`

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
          levels
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
`

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
`

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
`

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
`

export const GET_USER_CYCLE_PROGRESS = gql`
  query GetUserCycleProgress($user_id: bigint!) {
    user_cycles(where: { user_id: { _eq: $user_id } }) {
      id
      start_date
      cycle {
        id
        workout_count
        program {
          name
        }
        workouts(order_by: { subtitle: asc }, limit: 2) {
          id
          title
          subtitle
        }
      }
    }
  }
`

export const GET_DASHBOARD_DATA = gql`
  query GetDashboardDataForUser($userId: bigint!) {
    user_cycles(where: { user_id: { _eq: $userId } }) {
      id
      start_date
      current_workout
      user {
        id
        name
        email
        image_url
      }
      workout {
        id
        title
        subtitle
        poster
        isRestDay
        isActiveRecovery
        description
        date
        workout_items(limit: 2) {
          id
          title
          header
          notes
        }
      }
      cycle {
        program {
          name
          image
        }
        workouts(order_by: { id: asc }) {
          id
        }
        workout_count
      }
    }
  }
`

export const GET_DASHBOARD_DATA_FOR_USER = gql`
  query GetUserCycleProgress($userId: bigint!) {
    userCycle: user_cycles_by_pk(id: $userId) {
      id
      start_date
      current_workout
      ...User
      ...Workout
      cycle {
        ...ProgramDetails
        ...WorkoutIds
        total: workout_count
      }
    }
  }

  fragment User on user_cycles {
    user {
      id
      name
      email
      image_url
    }
  }

  fragment Workout on user_cycles {
    workout {
      id
      title
      first: workout_items(limit: 1, where: {}) {
        header
        id
        title
        notes
      }
      rest: workout_items(offset: 1) {
        id
        header
        title
      }
    }
  }

  fragment ProgramDetails on cycles {
    program {
      id
      name
      image
    }
  }

  fragment WorkoutIds on cycles {
    workouts(order_by: { id: asc }) {
      id
    }
  }
`

export const CHECK_USER_CREDENTIALS = gql`
  query CheckUserCredentials($email: String!, $password: String!) {
    users(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      id
      email
      name
      image_url
      created_at
      updated_at
    }
  }
`
