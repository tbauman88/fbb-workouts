import { TimelineItem } from '../pages/Dashboard'
import { PastWorkout, UpcomingWorkout } from '../hooks/useWorkouts'

export const WorkoutOverviewCard = ({
  workout,
  children,
}: {
  workout: UpcomingWorkout | PastWorkout,
  children: React.ReactNode
}) => {

  return (
    <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 my-4">
      <dl className="flex flex-wrap">
        <div className="flex-auto pl-6 pb-6 mt-6 border-b border-gray-900/5">
          <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">{workout.title}</dd>
        </div>

        <div className="flex-none self-end px-6 pt-4 pb-6 mt-6 border-b border-gray-900/5">
          {children}
        </div>

        {!workout.isRestDay && (
          <ul role="list" className="my-6 space-y-4 px-6 w-full">
            {workout.items.map((item, index) => <TimelineItem key={`${item.id}-${index}`} item={item} />)}
          </ul>
        )}
      </dl>
    </div>
  )
}
