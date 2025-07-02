import { QueryResult } from '@apollo/client'
import { GetProgramsQuery, useGetProgramsQuery } from 'generated/graphql'


type Programs = GetProgramsQuery['programs']

export type Program = Omit<Programs[number], 'cycles'> & {
  cycles: {
    id: number
    firstWorkoutId: number
  }[]
}

type UsePrograms = {
  programs: Program[] | undefined
  loading: boolean
  error: QueryResult['error']
}

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

export const formatProgramName = (name: string): string => PROGRAM_NAME_MAP[name] || name

export const usePrograms = (): UsePrograms => {
  const { data, loading, error } = useGetProgramsQuery()

  return {
    programs: data?.programs ? processPrograms(data.programs) : undefined,
    loading,
    error
  }
}

const processPrograms = (programs: Programs): Snickers[] => {
  return programs.map((program) => ({
    ...program,
    name: formatProgramName(program.name),
    cycles: program.cycles.map((cycle) => ({
      id: Number(cycle.workouts?.[0]?.cycle),
      firstWorkoutId: Number(cycle.workouts?.[0]?.id)
    }))
  }))
}
