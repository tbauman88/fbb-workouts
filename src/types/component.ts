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
  program: ProgramEntity
  handleClick: () => void
  title: string
  includeFooter?: boolean
  children?: React.ReactNode
}

export interface WorkoutCardProps {
  workout: Workout
}

export interface WorkoutItemProps {
  item: WorkoutItem
  updateScore: (variables: { variables: { workoutItemId: string; score: string } }) => Promise<void>
}

export interface NavigationProps {
  name: string
  href: string
  current: boolean
}
