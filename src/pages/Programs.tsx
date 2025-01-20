import { useCallback } from 'react'
import { usePrograms } from '../hooks/usePrograms'
import { ProgramCard, CardWrapper } from '../components'
import { useNavigate } from 'react-router-dom'

export const Programs = () => {
  const { programs, loading, error } = usePrograms()
  const navigate = useNavigate()

  const handleClick = useCallback(
    (program: Program) => {
      navigate(`/programs/${program.id}`)
    },
    [navigate]
  )

  const viewCycle = useCallback(
    (program: Program, cycle: number) => {
      navigate(`/workouts/${cycle}`)
    },
    [navigate]
  )

  const getCycleClasses = (cycleId: number) =>
    cycleId === 13 ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-gray-50 text-gray-600 ring-gray-500/10'

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <CardWrapper desktopCols={3}>
      {programs.map((program) => (
        <ProgramCard
          key={program.name}
          onClick={() => handleClick(program)}
          title={program.name}
          includeFooter={true}
          {...program}
        >
          {program.cycles.map((cycle, index: number) => (
            <span
              key={program.name + cycle.id}
              className={`cursor-pointer inline-flex items-center rounded-full px-2 py-1 mr-1 text-xs font-medium ring-1 ring-inset ${getCycleClasses(
                cycle.id
              )}`}
              onClick={() => viewCycle(program, cycle.firstWorkoutId)}
            >
              {index + 1}
            </span>
          ))}
        </ProgramCard>
      ))}
    </CardWrapper>
  )
}
