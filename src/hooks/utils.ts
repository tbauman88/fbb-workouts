import { MuscleGroupFragment } from "generated/graphql"

export const filterMuscleGroups = (muscleGroups: MuscleGroupFragment[] | null | undefined) => {
  if (!muscleGroups) return []

  return muscleGroups
    .filter((muscleGroup, index, self) => self.indexOf(muscleGroup) === index)
    .sort((a, b) => a.type.localeCompare(b.type))
    .filter((muscleGroup) => muscleGroup.type !== 'Mobility')
}
