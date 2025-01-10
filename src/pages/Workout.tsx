import React, { useMemo } from "react";
import { useWindowSize } from "react-use";
import { useWorkout } from "../hooks/useWorkout";
import { MainColumn } from "../components/MainColumn";
import { WorkoutColumn } from "../components/WorkoutColumn";
import { WorkoutItem } from "../components/WorkoutItem";

export const Workout = () => {
  const { workout: selectedWorkout, loading, error } = useWorkout(384);
  const { height } = useWindowSize();

  const isLargeScreen = useMemo(() => height > 1700, [height]);

  const [coachingItems, workoutItems] = useMemo(() => {
    if (!selectedWorkout) {
      return [[], []];
    }

    const items = selectedWorkout.workout_items ?? [];
    const firstTwo = items.slice(0, 2);
    const remaining = items.slice(2);

    return [firstTwo, remaining];
  }, [selectedWorkout]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!selectedWorkout) return <div>No workout found</div>;

  return (
    <main className="-mt-32">
      <div className="mx-auto max-w-full lg:px-16">
        <div className="rounded-lg bg-white lg:py-6 sm:px-6">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-8 lg:gap-4 lg:mx-0 lg:max-w-none lg:flex-row min-h-screen">
              <MainColumn
                title={selectedWorkout.title}
                subtitle={selectedWorkout.subtitle}
                poster={selectedWorkout.poster}
              >
                {isLargeScreen &&
                  coachingItems.map((item) => (
                    <WorkoutItem key={item.id} item={item} />
                  ))}
              </MainColumn>
              <WorkoutColumn
                workoutItems={
                  isLargeScreen ? workoutItems : selectedWorkout.workout_items
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
