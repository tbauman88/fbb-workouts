import React, { useMemo } from "react";
import { useWindowSize } from "react-use";
import { useWorkout } from "../hooks/useWorkout";
import { WorkoutItem } from "../components/WorkoutItem";

interface WorkoutColumnProps {
  workoutItems: unknown[];
}

const WorkoutColumn: FC<WorkoutColumnProps> = ({ workoutItems }) => (
  <div className="w-full lg:max-w-2xl lg:flex-auto lg:mt-24">
    <ul className="-my-6 divide-y divide-gray-100">
      {workoutItems.map((item) => (
        <WorkoutItem key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

interface MainColumnProps {
  title: string;
  subtitle: string;
  poster: string;
  children: ReactNode;
}

export const MainColumn: FC<MainColumnProps> = ({
  title,
  subtitle,
  poster,
  children
}) => (
  <div className="w-full mt-8 lg:mt-0 lg:max-w-lg lg:flex-auto lg:sticky lg:top-16 lg:self-start lg:h-screen">
    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
      {title}
    </h2>
    <h4 className="text-pretty text-xl tracking-tight text-gray-400">
      {subtitle}
    </h4>
    <img
      alt="Workout main image"
      src={poster}
      className="hidden sm:block mt-8 aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
    />
    {children}
  </div>
);

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
  );
};
