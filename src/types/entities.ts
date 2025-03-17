interface ExerciseEntity {
  demo_video_id: string
  demo_video_title: string
  demo_video_url: string | null
  demo_video_poster?: string
  levels: string[]
  hidden?: boolean
  scaleOptions?: boolean
  title: string
  subtitle?: string
  notes?: string | null
  base_url: string
}

export interface ExerciseDetailsEntity {
  id: number
  exercise_id: number
  workout_item_id: number
  title: string
  subtitle?: string
  levels: string
  exercise: ExerciseEntity
}

export type PartialExerciseDetails = Pick<ExerciseDetailsEntity, 'id' | 'title' | 'subtitle' | 'exercise'>

export interface ScoreEntity {
  value: string
}

export interface WorkoutItemEntity {
  id: number
  header?: string
  title?: string
  notes?: string | null
  scores?: ScoreEntity[]
  exercise_details: ExerciseDetailsEntity[] | PartialExerciseDetails[]
}

export interface WorkoutEntity {
  id: number
  title: string
  subtitle: string
  poster: string
  isRestDay: boolean
  isActiveRecovery: boolean
  description: string
  date: string
  cycle: number
  workout_items: WorkoutItemEntity[]
  notes?: string | null
  program_name?: string
}

export interface ProgramEntity {
  id: number
  name: string
  description: string
  image: string
  cycles: {
    workouts: {
      id: number
      cycle: number
    }[]
  }[]
}

export interface UserCycleEntity {
  id: number
  cycle_id: number
  completed_workouts: number[]
  current_workout: number
  start_date: string
  completed: boolean
  created_at: string
  updated_at: string
  cycle: CycleEntity
}

export interface UserEntity {
  id: number
  email: string
  image_url: string
  created_at: string
  updated_at: string
  user_cycles: UserCycleEntity[]
}

export interface CycleEntity {
  id: number
  cycle_number: number
  date: string
  bridge_week: boolean
  program: ProgramEntity
  workouts: WorkoutEntity[]
}
