import { QueryResult } from '@apollo/client'
import {
  useCompleteWorkoutMutation,
  useFinishCycleMutation,
  useUpsertWorkoutItemScoreMutation,
  useWorkoutByIdQuery,
  WorkoutPageFragment,
  MuscleGroupFragment,
  GetUserCycleProgress
} from '../generated/graphql'
import { WorkoutStatus } from '../types'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { useAuth } from './useAuth'

export type UseWorkout = {
  workout: WorkoutPageFragment | null | undefined
  canFinishCycle: boolean
  status: WorkoutStatus
  currentCycleId: string | null | undefined
  muscleGroups: MuscleGroupFragment[] | null | undefined
  upsertWorkoutItemScore: ReturnType<typeof useUpsertWorkoutItemScoreMutation>[0]
  completeWorkout: ReturnType<typeof useCompleteWorkoutMutation>[0]
  finishCycle: ReturnType<typeof useFinishCycleMutation>[0]
  loading: boolean
  error: QueryResult['error']
}

export const useWorkout = (): UseWorkout => {
  const { id: workoutId } = useParams<{ id: string }>()
  const { user } = useAuth()

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
    },
    refetchQueries: [
      {
        query: GetUserCycleProgress,
        variables: { userId: String(user?.id) }
      }
    ]
  })

  const [finishCycle] = useFinishCycleMutation({
    onCompleted: () => {
      console.log('Cycle finished successfully:', data)
    },
    onError: (error) => {
      console.error('Error finishing cycle:', error)
    }
  })

  const mapped = data?.workout?.workout_items
    .flatMap(({ exercise_details }) => exercise_details.map(({ exercise }) => exercise?.muscle_group))
    .filter((muscleGroup) => muscleGroup)
    .filter((muscleGroup, index, self) => self.indexOf(muscleGroup) === index)
    .sort((a, b) => (a?.type ?? '').localeCompare(b?.type ?? ''))
    .filter((muscleGroup) => muscleGroup?.type !== 'Mobility')

  const muscleGroups = useMemo(() => {
    if (!mapped) return []

    return mapped.filter((muscleGroup) => muscleGroup) as MuscleGroupFragment[]
  }, [mapped])


  return {
    workout: data?.workout,
    canFinishCycle: data?.user_workouts_aggregate.aggregate?.count === 0,
    status: data?.user_workouts[0]?.status ?? WorkoutStatus.PENDING,
    currentCycleId: data?.user_workouts[0]?.cycleId,
    muscleGroups,
    upsertWorkoutItemScore,
    completeWorkout,
    finishCycle,
    loading: loading,
    error
  }
}
