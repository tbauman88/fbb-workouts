import React from "react";
import { useWorkouts } from "../hooks/useWorkouts";
import { WorkoutCard, CardWrapper } from "../components";

export const Workouts = () => {
  const { workouts, loading, error } = useWorkouts(13);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CardWrapper desktopCols={1}>
      {workouts.map((workout) => (
        <WorkoutCard
          key={`${workout.id}-${workout.date}`}
          handleClick={() => handleWorkoutClick(workout.id)}
          {...{ workout }}
        />
      ))}
    </CardWrapper>
  );
};
