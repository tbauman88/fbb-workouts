import { gql } from '@apollo/client'

export const GET_USER_FRAGMENT = gql`
  fragment User on user_cycles {
    user {
      id
      name
      email
      image_url
    }
  }
`

export const GET_PROGRAMS_FRAGMENT = gql`
  fragment Programs on programs {
    id
    name
    image
  }
`

export const GET_WORKOUT_FRAGMENT = gql`
  fragment Workout on user_cycles {
    workout {
      id
      title
      first: workout_items(limit: 1) {
        id
        header
        notes
      }
      rest: workout_items(offset: 1) {
        id
        header
      }
    }
  }
`

export const GET_PROGRAM_DETAILS_FRAGMENT = gql`
  fragment ProgramDetails on cycles {
    program {
      id
      name
      image
    }
  }
`

export const GET_WORKOUT_IDS_FRAGMENT = gql`
  fragment WorkoutIds on cycles {
    workouts(order_by: { id: asc }) {
      id
    }
  }
`
