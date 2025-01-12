import React, { useMemo } from 'react';
import { useWindowSize } from 'react-use';
import { useWorkout } from '../hooks/useWorkout';
import { Button, QueryWrapper, WorkoutItem } from '../components';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../context/UserProvider';

const Header: React.FC<{
  name: string;
  handleClick: () => void;
}> = ({ name, handleClick = () => {} }) => (
  <div className="bg-gray-800 md:pb-32">
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 flex justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">{name}</h1>

        <div className="flex items-center text-gray-400">
          <button type="button" className="-my-1.5 flex flex-none items-center justify-center p-1.5 hover:text-white">
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" onClick={() => handleClick('prev')} />
          </button>

          <button
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 hover:text-white"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" onClick={() => handleClick('next')} />
          </button>
        </div>
      </div>
    </header>
  </div>
);

const Main: React.FC<{
  workout: Workout;
  coachingItems: WorkoutItem[];
  workoutItems: WorkoutItem[];
  handleComplete: () => void;
  completed: boolean;
}> = ({ workout, coachingItems, workoutItems, handleComplete, completed }) => (
  <main className="-mt-32">
    <div className="mx-auto max-w-full lg:px-16">
      <div className="rounded-lg bg-white lg:py-6 sm:px-6">
        <div className="mx-auto max-w-7xl px-4">
          <section className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-8 lg:gap-4 lg:mx-0 lg:max-w-none lg:flex-row min-h-screen">
            <div className="w-full mt-8 lg:mt-0 lg:max-w-lg lg:flex-auto lg:sticky lg:top-16 lg:self-start lg:h-screen">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">{workout.title}</h2>
              <h4 className="text-pretty text-xl tracking-tight text-gray-400">{workout.subtitle}</h4>
              <img
                alt="Workout main image"
                src={workout.poster}
                className="hidden sm:block mt-8 aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
              {coachingItems.map((item) => (
                <WorkoutItem key={item.id} item={item} />
              ))}
            </div>

            <div className="w-full lg:max-w-2xl lg:flex-auto lg:mt-24">
              <section className="-my-6 divide-y divide-gray-100">
                {workoutItems.map((item) => (
                  <WorkoutItem key={item.id} item={item} />
                ))}
              </section>

              <div className="my-8">
                <Button
                  text={completed ? 'Cycle Completed' : 'Mark as Complete'}
                  onClick={handleComplete}
                  disabled={completed}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
);

const WorkoutContent = ({ workout }: { workout: Workout }) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const { currentProgram } = useUserContext();

  const isLargeScreen = useMemo(() => width > 1280, [width]);

  const [coachingItems, workoutItems] = useMemo(() => {
    if (!workout || !workout.workout_items) {
      return [[], []];
    }

    const items = workout.workout_items;

    const firstTwo = isLargeScreen ? items.slice(0, 2) : [];
    const remaining = isLargeScreen ? items.slice(2) : items;

    return [firstTwo, remaining];
  }, [workout, isLargeScreen]);

  const handleClick = (direction: 'next' | 'prev') => {
    const id = direction === 'next' ? workout.id + 1 : workout.id - 1;
    navigate(`/workouts/${id}`);
  };

  const handleComplete = async () => {
    try {
      console.log('completing workout');
    } catch (err) {
      console.error('Error completing workout:', err);
    }
  };

  const completed = false;

  return (
    <div className="min-h-full">
      <Header name={currentProgram.name} handleClick={handleClick} />
      <Main {...{ workout, coachingItems, workoutItems, handleComplete, completed }} />
    </div>
  );
};

export const Workout = () => {
  const { id } = useParams<{ id: string }>();
  const { workout, loading, error } = useWorkout(id);

  return (
    <QueryWrapper loading={loading} error={error} data={workout} emptyMessage="No workout found">
      <WorkoutContent workout={workout} />
    </QueryWrapper>
  );
};
