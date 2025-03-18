import { QueryResult } from '@apollo/client'
import {
  useCompleteWorkoutMutation,
  useFinishCycleMutation,
  useUpsertWorkoutItemScoreMutation,
  useWorkoutByIdQuery,
  WorkoutByIdQuery,
} from '../generated/graphql'
import { WorkoutStatus } from '../types'
import { useParams } from 'react-router-dom'

export type Workout = WorkoutByIdQuery['workout']

export type UseWorkout = {
  workout: Workout
  nextWorkoutId: string | null | undefined
  status: WorkoutStatus
  currentCycleId: string | null | undefined
  upsertWorkoutItemScore: ReturnType<typeof useUpsertWorkoutItemScoreMutation>[0]
  completeWorkout: ReturnType<typeof useCompleteWorkoutMutation>[0]
  finishCycle: ReturnType<typeof useFinishCycleMutation>[0]
  loading: boolean
  error: QueryResult['error']
}

export const useWorkout = (): UseWorkout => {
  const { id: workoutId } = useParams<{ id: string }>()

  if (!workoutId) throw new Error('No workout id provided');

  const { data, loading, error } = useWorkoutByIdQuery({
    variables: { id: workoutId },
    fetchPolicy: 'cache-first'
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
    currentCycleId: data?.user_workouts[0]?.cycleId,
    completeWorkout,
    finishCycle,
    loading: loading,
    error
  }
}
