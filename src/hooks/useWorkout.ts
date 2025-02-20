import { QueryResult } from '@apollo/client'
import { CurrentProgram, useUserContext } from '../context/UserProvider'
import {
  useCompleteWorkoutMutation,
  useFinishCycleMutation,
  useUpsertWorkoutItemScoreMutation,
  useWorkoutByIdQuery,
  WorkoutByIdQuery
} from '../generated/graphql'

export type UseWorkout = {
  workout: WorkoutByIdQuery['workout']
  nextWorkoutId: string | null | undefined
  completed: boolean
  currentProgram: CurrentProgram | null
  upsertWorkoutItemScore: ReturnType<typeof useUpsertWorkoutItemScoreMutation>[0]
  completeWorkout: ReturnType<typeof useCompleteWorkoutMutation>[0]
  finishCycle: ReturnType<typeof useFinishCycleMutation>[0]
  loading: boolean
  error: QueryResult['error']
}

export const useWorkout = (id: string | undefined): UseWorkout => {
  const { currentProgram } = useUserContext()

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

  const workoutIds = data?.workout?.user_workouts.map((workout) => workout.id)

  return {
    workout: data?.workout,
    nextWorkoutId: data?.workout?.current_cycle?.next_workout,
    completed: workoutIds?.includes(data?.workout?.id ?? '') ?? false,
    upsertWorkoutItemScore,
    completeWorkout,
    finishCycle,
    currentProgram,
    loading: loading,
    error
  }
}
