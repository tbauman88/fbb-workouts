import { WorkoutStatus } from '../types'

interface BadgeProps {
  status: WorkoutStatus.COMPLETED | WorkoutStatus.SKIPPED
}

export const Badge = ({ status }: BadgeProps) => {
  const variant = {
    [WorkoutStatus.COMPLETED]: 'text-green-700 bg-green-50 ring-green-600/20',
    [WorkoutStatus.SKIPPED]: 'text-gray-700 bg-gray-50 ring-gray-600/20'
  }

  return (
    <p className={`rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset uppercase mb-2 ${variant[status]}`}>
      Workout {status}
    </p>
  )
}
