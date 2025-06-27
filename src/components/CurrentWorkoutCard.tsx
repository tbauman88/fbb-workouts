import { Loading } from '../pages/Loading'
import { Badge } from './Badge'
import { WorkoutStatusBadge } from './WorkoutStatusBadge'
import { TimelineItem } from './TimelineItem'
import { DashboardContent } from '../hooks/useDashboard'

type CurrentWorkoutCardProps = {
  currentWorkout: DashboardContent['currentWorkout']
  onClick: (id: string) => void
  loading: boolean
}

export const CurrentWorkoutCard = ({ currentWorkout, onClick, loading }: CurrentWorkoutCardProps) => {
  if (loading || !currentWorkout) {
    return <Loading page="dashboard" component="current-workout-card" />
  }

  return (
    <div className="-mx-4 shadow-xs ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pb-6 mt-6 border-b border-gray-900/5">
            <dt className="text-sm font-semibold leading-6 text-gray-900 uppercase">Daily Training:</dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">{currentWorkout?.title}</dd>

            <div className="flex flex-wrap gap-1 mt-2">
              {currentWorkout.muscleGroups.map((muscleGroup) => (
                <Badge key={muscleGroup.id} muscleGroup={muscleGroup.type} />
              ))}
            </div>
          </div>

          <div className="flex-none self-end px-6 pt-4 pb-6 mt-6 border-b border-gray-900/5">
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

        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <a
            onClick={() => onClick(currentWorkout.id)}
            className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
          >
            Proceed to workout <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
} 
