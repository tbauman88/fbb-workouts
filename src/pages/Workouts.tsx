import React from "react";
import { useWorkouts } from "../hooks/useWorkouts";
import { WorkoutCard, CardWrapper } from "../components";

export const Workouts = () => {
  const { workouts, loading, error } = useWorkouts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="text-2xl font-semibold">Workouts</h1>
      <CardWrapper desktopCols={8}>
        {workouts.map((workout) => (
          <WorkoutCard
            key={`${workout.id}-${workout.date}`}
            handleClick={() => handleWorkoutClick(workout.id)}
            {...{ workout }}
          />
        ))}
      </CardWrapper>
    </div>
  );
};
