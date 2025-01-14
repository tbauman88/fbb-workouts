import { useQuery } from '@apollo/client'
import { GET_PROGRAMS } from '../graphql/queries'
import { ProgramEntity } from '../types'

export const PROGRAM_NAME_MAP: Record<string, string> = {
  PERSIST_PUMP_HYPERTROPHY: 'Full Body Pump Lift',
  PERSIST_PUMP_HYPERTROPHY_3DAY: 'Full Body Pump Lift (3x/wk)',
  PERSIST_PUMP: 'Full Body Pump Condition',
  PERSIST_PUMP_3DAY: 'Full Body Pump Condition (3x/wk)',
  PERSIST_PERFORM: 'Perform',
  'OLY BUILDING': 'Olympic Building',
  'PUMP CONDITION': 'Pump Condition',
  'PUMP LIFT': 'Pump Lift',
  'PUMP 40': 'Pump 40'
}

export const usePrograms = () => {
  const { loading, error, data } = useQuery<{
    programs: ProgramEntity[]
  }>(GET_PROGRAMS)

  const programs = data?.programs.map((program) => ({
    ...program,
    name: PROGRAM_NAME_MAP[program.name] || program.name,
    cycles: program.cycles.map((cycle) => ({
      id: cycle.workouts[0].cycle,
      firstWorkoutId: cycle.workouts[0].id
    }))
  }))

  return { programs, loading, error }
}
