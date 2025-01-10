import { useQuery } from "@apollo/client";
import { GET_EXERCISES } from "../graphql/queries";

export const useExercises = () => {
  const { data, loading, error } = useQuery(GET_EXERCISES);

  const groupedExercises = data?.exercises.reduce(
    (acc: Record<string, Exercise[]>, exercise) => {
      // Get first character of title
      const firstChar =
        exercise.demo_video_title?.charAt(0).toUpperCase() || "#";

      // Check if it's a number
      const group = /^\d/.test(firstChar) ? "#" : firstChar;

      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(exercise);
      return acc;
    },
    {}
  );

  // Sort groups alphabetically, ensuring '#' comes first
  const sortedGroups = Object.keys(groupedExercises || {})
    .sort((a, b) => {
      if (a === "#") return -1;
      if (b === "#") return 1;
      return a.localeCompare(b);
    })
    .reduce((obj, key) => {
      obj[key] = groupedExercises[key].sort((a, b) =>
        a.demo_video_title.localeCompare(b.demo_video_title)
      );
      return obj;
    }, {} as Record<string, Exercise[]>);

  return {
    groupedExercises: sortedGroups,
    loading,
    error
  };
};
