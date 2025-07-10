import { QueryResult } from "@apollo/client"
import { GetExercisesQuery, useGetExercisesQuery } from "generated/graphql"

export type Exercise = GetExercisesQuery['exercises'][number]
type ExerciseGroups = Record<string, Exercise[]>

type UseExercises = {
  exercises: Record<string, GetExercisesQuery['exercises'][number][]>
  loading: boolean
  error: QueryResult['error']
}

export const useExercises = (): UseExercises => {
  const { data, loading, error } = useGetExercisesQuery()

  return {
    exercises: data?.exercises ? Exercises.process(data.exercises) : {},
    loading,
    error
  }
}

class Exercises {
  private static getGroupKey(title: string | null | undefined): string {
    if (!title) return '#'

    const firstChar = title.charAt(0).toUpperCase()
    return /^\d/.test(firstChar) ? '#' : firstChar
  }

  private static groupExercises(exercises: Exercise[]): ExerciseGroups {
    return exercises.reduce<ExerciseGroups>((groups, exercise) => {
      const groupKey = this.getGroupKey(exercise.demo_video_title)

      return {
        ...groups,
        [groupKey]: [...(groups[groupKey] || []), exercise]
      }
    }, {})
  }

  private static sortExerciseGroups(groups: ExerciseGroups): ExerciseGroups {
    return Object.entries(groups)
      .sort(([a], [b]) => (a === '#' ? -1 : b === '#' ? 1 : a.localeCompare(b)))
      .reduce<ExerciseGroups>((sortedGroups, [key, exercises]) => ({
        ...sortedGroups,
        [key]: exercises.sort((a, b) => a.demo_video_title.localeCompare(b.demo_video_title))
      }), {})
  }


  public static process(exercises: Exercise[]): ExerciseGroups {
    if (!exercises) return {}
    return this.sortExerciseGroups(this.groupExercises(exercises))
  }
}
