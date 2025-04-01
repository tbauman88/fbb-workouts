type WorkoutStatusBadgeProps = {
  isActiveRecovery: boolean
  isRestDay: boolean
}

export const WorkoutStatusBadge = ({ isActiveRecovery, isRestDay }: WorkoutStatusBadgeProps) => {
  if (isActiveRecovery) {
    return (
      <dd className="rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
        Active Recovery Day
      </dd>
    )
  }

  if (isRestDay) {
    return (
      <dd className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
        Rest Day
      </dd>
    )
  }
  return null
} 
