import React, { useMemo, FC, ReactNode } from "react";
import { useWindowSize } from "react-use";
import { useWorkout } from "../hooks/useWorkout";
import { WorkoutItem } from "../components/WorkoutItem";
import { Workout as WorkoutType } from "../types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

interface WorkoutColumnProps {
  workoutItems: WorkoutType[];
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

const MainColumn: FC<MainColumnProps> = ({
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

const Header: FC<{ handleClick: (direction: "next" | "prev") => void }> = ({
  handleClick = () => {}
}) => {
  const name = "Workout";

  return (
    <div className="bg-gray-800 md:mb-32">
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 flex justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {name}
          </h1>

          <div className="flex items-center text-gray-400">
            <button
              type="button"
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 hover:text-white"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={() => handleClick("prev")}
              />
            </button>
            <button
              type="button"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 hover:text-white"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={() => handleClick("next")}
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export const Workout = () => {
  const { id } = useParams<{ id: string }>();

  const { workout: selectedWorkout, loading, error } = useWorkout(id);
  const { height } = useWindowSize();
  const navigate = useNavigate();

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

  const handleClick = (direction: "next" | "prev") => {
    const id =
      direction === "next" ? selectedWorkout.id + 1 : selectedWorkout.id - 1;
    navigate(`/workouts/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!selectedWorkout) return <div>No workout found</div>;

  return (
    <div className="min-h-full">
      <Header handleClick={handleClick} />

      <div className="mx-auto max-w-7xl px-4">
        <main className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-8 lg:gap-4 lg:mx-0 lg:max-w-none lg:flex-row min-h-screen">
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
        </main>
      </div>
    </div>
  );
};
