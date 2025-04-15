import React, { useEffect, useMemo, useState } from 'react'
import { useWindowSize } from 'react-use'
import { useWorkout } from '../hooks/useWorkout'
import { ButtonGroup, WorkoutItem, Logo, Badge } from '../components'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, ForwardIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { Loading } from './Loading'
import { WorkoutStatus } from '../types'

type Direction = 'next' | 'prev' | 'home'

const Header: React.FC<{
  handleClick: (direction: Direction) => void
}> = ({ handleClick }) => (
  <div className="bg-gray-800 pb-32">
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 flex justify-between py-3">
        <Logo onClick={() => handleClick('home')} />

        <div className="flex items-center text-gray-400">
          <button
            type="button"
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 hover:text-white"
            onClick={() => handleClick('prev')}
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 hover:text-white"
            onClick={() => handleClick('next')}
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  </div>
)

const Wrapper = ({ children, loading, handleClick }: {
  children: React.ReactNode,
  loading: boolean,
  handleClick: (direction: Direction) => void
}) => (
  <div className="min-h-full">
    <Header handleClick={handleClick} />

    <main className="-mt-32">
      <div className="mx-auto max-w-full lg:px-16">
        <div className="rounded-lg bg-white lg:py-6 sm:px-6">
          <div className="mx-auto max-w-7xl px-4">
            <section className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-8 lg:gap-4 lg:mx-0 lg:max-w-none lg:flex-row lg:min-h-screen">
              {loading ? <Loading page="workout" /> : children}
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export const Workout = () => {
  const {
    workout,
    canFinishCycle,
    currentCycleId,
    muscleGroups,
    status,
    loading,
    error,
    completeWorkout,
    finishCycle,
  } = useWorkout()

  const [workoutStatus, setWorkoutStatus] = useState<WorkoutStatus>(WorkoutStatus.PENDING)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const { width } = useWindowSize()
  const navigate = useNavigate()
  const isLargeScreen = useMemo(() => width > 1280, [width])

  useEffect(() => {
    if (status !== WorkoutStatus.PENDING) {
      setIsCompleted(true)
    }

    setWorkoutStatus(status)
  }, [status])

  const [coachingItems, workoutItems] = useMemo(() => {
    if (!workout || !workout.workout_items) {
      return [[], []]
    }

    const items = workout.workout_items
    const firstTwo = isLargeScreen ? items.slice(0, 2) : []
    const remaining = isLargeScreen ? items.slice(2) : items

    return [firstTwo, remaining]
  }, [workout, isLargeScreen])

  const handleClick = (direction: Direction) => {
    const id = Number(workout?.id)
    const pages = {
      home: `/`,
      prev: `/workouts/${id - 1}`,
      next: `/workouts/${id + 1}`
    }

    navigate(pages[direction])
  }

  const handleSubmit = async (status: WorkoutStatus) => {
    try {
      if (!workout || !currentCycleId) return;

      const variables = {
        completedWorkout: workout.id,
        cycleId: currentCycleId
      }

      if (canFinishCycle) {
        await finishCycle({ variables })
      } else {
        await completeWorkout({
          variables: {
            ...variables,
            status,
          }
        })
      }

      setWorkoutStatus(status)
    } catch (err) {
      console.error('Error completing workout:', err)
    }
  }

  if (error) return <div>Error: {error.message}</div>

  return (
    <Wrapper loading={loading} handleClick={handleClick}>
      {(workout && currentCycleId) && (
        <>
          <div className="w-full mt-8 lg:mt-0 lg:max-w-lg lg:flex-auto lg:sticky lg:top-16 lg:self-start lg:h-screen">
            <div className="flex items-start gap-x-3 items-end">
              <div className="flex-grow">
                <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                  {workout.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {workoutStatus === WorkoutStatus.COMPLETED && <Badge status={workoutStatus} />}
                  {workoutStatus === WorkoutStatus.SKIPPED && <Badge status={workoutStatus} />}
                  {muscleGroups && muscleGroups.map((muscleGroup) => (
                    <Badge key={muscleGroup.id} muscleGroup={muscleGroup.type} />
                  ))}
                </div>
              </div>


            </div>
            <img
              alt="Workout main image"
              src={workout.poster ?? ''}
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


            <ButtonGroup
              icon={ForwardIcon}
              onButtonClick={() => handleSubmit(WorkoutStatus.COMPLETED)}
              onIconClick={() => handleSubmit(WorkoutStatus.SKIPPED)}
              disabled={isCompleted}
              status={workoutStatus}
              showIconButton={workoutStatus === WorkoutStatus.PENDING}
            >
              <div className='flex items-center justify-center gap-2'>
                {workoutStatus === WorkoutStatus.COMPLETED && <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />}
                {isCompleted ? `Workout ${workoutStatus}` : 'Mark as Complete'}
              </div>
            </ButtonGroup>
          </div>
        </>
      )}
    </Wrapper >
  )
}
