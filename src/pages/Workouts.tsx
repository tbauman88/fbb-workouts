import React from 'react'
import { useWorkouts } from '../hooks/useWorkouts'
import { WorkoutCard, CardWrapper } from '../components'
import { Loading } from './Loading'

export const Workouts = () => {
  const { workouts, loading, error } = useWorkouts(13)

  if (error) return <div>Error: {error.message}</div>

  return (
    <CardWrapper desktopCols={1}>
      {loading && <Loading page="workouts" />}

      {workouts?.map((workout) => (
        <WorkoutCard
          key={`${workout.id}-${workout.date}`}
          handleClick={() => handleWorkoutClick(workout.id)}
          {...{ workout }}
        />
      ))}
    </CardWrapper>
  )
}
