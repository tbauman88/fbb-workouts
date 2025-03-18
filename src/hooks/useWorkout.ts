import { QueryResult } from '@apollo/client'
import { CurrentProgram, useDashboard } from './useDashboard'
import {
  useCompleteWorkoutMutation,
  useFinishCycleMutation,
  useUpsertWorkoutItemScoreMutation,
  useWorkoutByIdQuery,
  WorkoutByIdQuery,
} from '../generated/graphql'
import { WorkoutStatus } from '../types'

export type Workout = WorkoutByIdQuery['workout']

export type UseWorkout = {
  workout: Workout
  nextWorkoutId: string | null | undefined
  status: WorkoutStatus
  currentProgram: CurrentProgram | null
  upsertWorkoutItemScore: ReturnType<typeof useUpsertWorkoutItemScoreMutation>[0]
  completeWorkout: ReturnType<typeof useCompleteWorkoutMutation>[0]
  finishCycle: ReturnType<typeof useFinishCycleMutation>[0]
  loading: boolean
  error: QueryResult['error']
}

export const useWorkout = (id: string | undefined): UseWorkout => {
  const { currentProgram } = useDashboard()

  if (!id) throw new Error('No workout id provided');

  const { data, loading, error } = useWorkoutByIdQuery({
    variables: {
      id,
      cycleId: String(currentProgram?.cycleId ?? '')
    }
  })

  const [upsertWorkoutItemScore] = useUpsertWorkoutItemScoreMutation({
    onCompleted: () => {
      console.log('Workout item score updated successfully:', data)
    },
    onError: (error) => {
      console.error('Error updating workout item score:', error)
    }
  })

  const [completeWorkout] = useCompleteWorkoutMutation({
    onCompleted: () => {
      console.log('Workout completed successfully:', data)
    },
    onError: (error) => {
      console.error('Error completing workout:', error)
    }
  })

  const [finishCycle] = useFinishCycleMutation({
    onCompleted: () => {
      console.log('Cycle finished successfully:', data)
    },
    onError: (error) => {
      console.error('Error finishing cycle:', error)
    }
  })

  return {
    workout: data?.workout,
    nextWorkoutId: data?.next_workout[0]?.id,
    status: data?.user_workouts[0]?.status ?? WorkoutStatus.PENDING,
    upsertWorkoutItemScore,
    completeWorkout,
    finishCycle,
    currentProgram,
    loading: loading,
    error
  }
}
