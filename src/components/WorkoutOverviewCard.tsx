import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'
import { PastWorkout, UpcomingWorkout } from 'hooks/useWorkouts'
import { TimelineItem } from './'

export const WorkoutOverviewCard = ({
  workout,
  children,
}: {
  workout: UpcomingWorkout | PastWorkout,
  children: React.ReactNode,
}) => {
  const clickable = !workout.isActiveRecovery && !workout.isRestDay
  const showChildren = workout.isActiveRecovery || workout.isRestDay
  const navigate = useNavigate()

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 my-4">
      <dl className="flex flex-wrap">
        <div
          className={`flex-auto pl-6 pb-6 mt-6 border-b border-gray-900/5 ${clickable ? 'cursor-pointer' : ''}`}
          onClick={() => navigate(`/workouts/${workout.id}`)}
        >
          <dd className="text-base font-semibold leading-6 text-gray-900 flex items-center gap-4">
            {workout.title}
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </dd>
        </div>

        {showChildren && (
          <div className="flex-none self-end px-6 pb-6 border-b border-gray-900/5">
            {children}
          </div>
        )}


        {!workout.isRestDay && (
          <ul role="list" className="my-6 space-y-4 px-6 w-full">
            {workout.items.map((item, index) => <TimelineItem key={`${item.id}-${index}`} item={item} />)}
          </ul>
        )}
      </dl>
    </div>
  )
}
