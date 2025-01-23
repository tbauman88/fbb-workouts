import { useQuery, useMutation } from '@apollo/client'
import { GET_WORKOUT_BY_ID } from '../graphql/queries'
import { UPSERT_WORKOUT_ITEM_SCORE, COMPLETE_WORKOUT } from '../graphql/mutations'
import { WorkoutEntity } from '../types'
import { useUserContext } from '../context/UserProvider'

interface WorkoutData {
  workout: WorkoutEntity
}

export const useWorkout = (id: number) => {
  const { currentProgram } = useUserContext()

  const { data, loading, error } = useQuery<WorkoutData>(GET_WORKOUT_BY_ID, {
    variables: { id: String(id), cycleId: String(currentProgram?.cycleId) }
  })

  const [upsertWorkoutItemScore] = useMutation(UPSERT_WORKOUT_ITEM_SCORE, {
    onCompleted: () => {
      console.log('Workout item score updated successfully:', data)
    },
    onError: (error) => {
      console.error('Error updating workout item score:', error)
    }
  })

  const [completeWorkout] = useMutation(COMPLETE_WORKOUT, {
    onCompleted: () => {
      console.log('Workout completed successfully:', data)
    },
    onError: (error) => {
      console.error('Error completing workout:', error)
    }
  })

  const workoutIds = data?.workout.user_workouts.map((workout) => workout.id)

  return {
    workout: data?.workout,
    nextWorkoutId: data?.workout.current_cycle.next_workout,
    completed: workoutIds?.includes(data?.workout.id) ?? false,
    upsertWorkoutItemScore,
    completeWorkout,
    currentProgram,
    loading,
    error
  }
}
