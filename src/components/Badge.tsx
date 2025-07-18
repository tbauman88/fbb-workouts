import { WorkoutStatus } from 'types'

interface BadgeProps {
  status?: WorkoutStatus.COMPLETED | WorkoutStatus.SKIPPED
  muscleGroup?: string
}

export const Badge = ({ status, muscleGroup }: BadgeProps) => {
  const variant = {
    [WorkoutStatus.COMPLETED]: 'text-accent-700 bg-accent-50 ring-accent-600/20',
    [WorkoutStatus.SKIPPED]: 'text-gray-700 bg-gray-50 ring-gray-600/20',
    'muscleGroup': 'text-gray-700 bg-gray-50 ring-gray-600/20'
  }

  const padding = status ? 'px-1.5 py-0.5' : 'px-2 py-1'
  const classNames = `${padding} ${variant[status ?? 'muscleGroup']}`

  return (
    <p className={`rounded-md text-xs font-medium ring-1 ring-inset uppercase ${classNames}`}>
      {status ? `Workout ${status}` : muscleGroup}
    </p>
  )
}
