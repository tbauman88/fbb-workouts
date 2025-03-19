import { WorkoutByIdQuery } from "../generated/graphql"
import { Program } from "../hooks/usePrograms"

export interface QueryWrapperProps {
  loading?: boolean
  error?: Error | null
  data: unknown
  emptyMessage?: string
  children: React.ReactNode
}

export interface CardWrapperProps {
  children: React.ReactNode
  desktopCols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export interface ProgramCardProps {
  program: Program
  handleClick: () => void
  title: string
  includeFooter?: boolean
  children?: React.ReactNode
}

export interface WorkoutCardProps {
  workout: Workout
}

type Workout = NonNullable<WorkoutByIdQuery['workout']>
export type WorkoutItem = NonNullable<Workout>['workout_items']

export interface WorkoutItemProps {
  item: WorkoutItem[number]
}

export interface NavigationProps {
  name: string
  href: string
  current: boolean
}

export enum Role {
  ADMIN = 'admin',
  GUEST = 'guest',
  USER = 'user'
}
