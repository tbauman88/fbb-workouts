import { Loading } from './Loading'
import { useState } from 'react'
import { WorkoutStatus } from '../types'
import { Badge, WorkoutOverviewCard, WorkoutStatusBadge } from '../components'
import { useWorkouts } from '../hooks/useWorkouts'

enum WorkoutType {
  UPCOMING = 'upcoming',
  PAST = 'past'
}

export const Workouts = () => {
  // TODO: Update to use current_user_cycle and user_id
  const { upcomingWorkouts, pastWorkouts, loading, error } = useWorkouts({
    userId: '1',
    cycle: '4'
  })

  const [workoutType, setWorkoutType] = useState<WorkoutType>(WorkoutType.UPCOMING)

  const baseClasses = 'uppercase text-sm border-2 px-2 py-1 rounded-md w-full tracking-wide'
  const variantStyles = {
    'active': 'bg-gray-800 border-gray-800 text-white',
    'non-active': 'bg-white border-gray-800 text-gray-800'
  }

  if (error) return <div>Error: {error.message}</div>
  if (loading) return <Loading page="workouts" />

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className='bg-white py-4 sticky top-0 z-10'>
          <div className="sticky top-4 z-10">
            <div className="flex justify-end gap-2">
              {Object.entries(WorkoutType).map(([key, type]) => (
                <button
                  key={type}
                  className={`${baseClasses} ${variantStyles[workoutType === type ? 'active' : 'non-active']}`}
                  onClick={() => setWorkoutType(type)}
                >
                  {key.charAt(0) + key.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
        <section className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="-mx-4 shadow-sm sm:mx-0 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <div className="lg:flex lg:h-full lg:flex-col">
              {workoutType === WorkoutType.UPCOMING && (
                upcomingWorkouts?.map((workout, index) => (
                  <WorkoutOverviewCard
                    key={workout.id + index}
                    workout={workout}
                  >
                    <dt className="sr-only">Is Rest Day?</dt>
                    <WorkoutStatusBadge
                      isActiveRecovery={workout.isActiveRecovery}
                      isRestDay={workout.isRestDay} />
                  </WorkoutOverviewCard>
                ))
              )}

              {workoutType === WorkoutType.PAST && (
                pastWorkouts?.map((workout, index) => (
                  <WorkoutOverviewCard
                    key={workout.id + index}
                    workout={workout}
                  >
                    {workout.status === WorkoutStatus.PENDING ? null : <Badge status={workout.status} />}
                  </WorkoutOverviewCard>
                ))
              )}
            </div>
          </div>
        </section >
      </div >
    </main >
  )
}
