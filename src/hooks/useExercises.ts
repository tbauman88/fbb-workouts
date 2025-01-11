import { useQuery } from "@apollo/client";
import { GET_EXERCISES } from "../graphql/queries";

export const useExercises = () => {
  const { data, loading, error } = useQuery(GET_EXERCISES);

  const groupedExercises = data?.exercises.reduce<Record<string, Exercise[]>>(
    (acc, exercise) => {
      const { demo_video_title } = exercise;

      const firstChar = demo_video_title?.charAt(0).toUpperCase() || "#";
      const group = /^\d/.test(firstChar) ? "#" : firstChar;

      acc[group] = acc[group] || [];
      acc[group].push(exercise);

      return acc;
    },
    {}
  );

  // Sort groups alphabetically, ensuring '#' comes first, and sort exercises within each group
  const sortedGroups = Object.entries(groupedExercises || {})
    .sort(([a], [b]) => (a === "#" ? -1 : b === "#" ? 1 : a.localeCompare(b)))
    .reduce<Record<string, Exercise[]>>((acc, [key, exercises]) => {
      acc[key] = exercises.sort((a, b) =>
        a.demo_video_title.localeCompare(b.demo_video_title)
      );
      return acc;
    }, {});

  return {
    groupedExercises: sortedGroups,
    loading,
    error
  };
};
