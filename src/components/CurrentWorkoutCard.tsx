import { CurrentWorkout } from 'hooks/useDashboard'
import { Loading } from 'pages/Loading'
import { Badge } from './Badge'
import { TimelineItem } from './TimelineItem'
import { WorkoutStatusBadge } from './WorkoutStatusBadge'

type CurrentWorkoutCardProps = {
  currentWorkout: CurrentWorkout | null
  onClick: (id: string) => void
  loading: boolean
}

export const CurrentWorkoutCard = ({ currentWorkout, onClick, loading }: CurrentWorkoutCardProps) => {
  if (loading || !currentWorkout) {
    return <Loading page="dashboard" component="current-workout-card" />
  }

  return (
    <div className="workout-card -mx-4 sm:mx-0 lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <dl className="flex flex-wrap">
        <div className="flex-auto pl-6 pb-6 mt-6 border-b border-neutral-200">
          <dt className="text-sm font-semibold leading-6 text-neutral-900 uppercase">Daily Training:</dt>
          <dd className="mt-1 text-base font-semibold leading-6 text-neutral-900">{currentWorkout?.title}</dd>

          <div className="flex flex-wrap gap-1 mt-2">
            {currentWorkout.muscleGroups.map((muscleGroup) => (
              <Badge key={muscleGroup.id} muscleGroup={muscleGroup.type} />
            ))}
          </div>
        </div>

        <div className="flex-none self-end px-6 pt-4 pb-6 mt-6 border-b border-neutral-200">
          <dt className="sr-only">Is Rest Day?</dt>
          <WorkoutStatusBadge
            isActiveRecovery={currentWorkout.isActiveRecovery}
            isRestDay={currentWorkout.isRestDay}
          />
        </div>

        <ul role="list" className="mt-6 space-y-4 px-6 w-full">
          {currentWorkout.items.map((item, index) => <TimelineItem key={`${item.id}-${index}`} item={item} />)}
        </ul>
      </dl>

      <div className="mt-6 border-t border-neutral-200 px-6 pt-6">
        <a
          onClick={() => onClick(currentWorkout.id)}
          className="text-sm font-semibold leading-6 text-neutral-900 cursor-pointer hover:text-primary-600 transition-colors focus-ring interactive"
        >
          Proceed to workout <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  )
} 
