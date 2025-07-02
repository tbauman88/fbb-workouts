import { WorkoutStatusEnumEnum as WorkoutStatus } from 'generated/graphql'

export * from './whoop'
export { WorkoutStatus }

export enum Role {
  ADMIN = 'admin',
  GUEST = 'guest',
  USER = 'user'
}

