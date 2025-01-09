import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql`
  query GetWorkouts {
    workouts {
        title
        date
        subtitle
        cycle
    }
  }
`;
