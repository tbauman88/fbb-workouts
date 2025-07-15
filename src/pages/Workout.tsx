import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, ForwardIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from 'react-use'
import { Badge, ButtonGroup, Logo, WorkoutItem } from '../components'
import { useWorkout } from '../hooks/useWorkout'
import { WorkoutStatus } from '../types'
import { getProxiedImageUrl } from '../utils/imageProxy'
import { Loading } from './Loading'

type Direction = 'next' | 'prev' | 'home'

const Header: React.FC<{
  handleClick: (direction: Direction) => void
}> = ({ handleClick }) => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-900 pb-32">
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 flex justify-between py-3">
        <Logo onClick={() => handleClick('home')} />

        <div className="flex items-center text-gray-400">
          <button
            type="button"
            className="-my-1.5 flex flex-none items-center justify-center p-2 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            onClick={() => handleClick('prev')}
            aria-label="Previous workout"
          >
            <span className="sr-only">Previous workout</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-2 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            onClick={() => handleClick('next')}
            aria-label="Next workout"
          >
            <span className="sr-only">Next workout</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  </div>
)

// const ScrollToTopButton: React.FC<{ visible: boolean }> = ({ visible }) => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   if (!visible) return null

//   return (
//     <button
//       onClick={scrollToTop}
//       className="fixed bottom-28 right-4 z-40 lg:bottom-4 lg:right-4 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
//       aria-label="Scroll to top"
//     >
//       <ArrowUpIcon className="h-5 w-5" />
//     </button >
//   )
// }

const Wrapper = ({ children, loading, handleClick }: {
  children: React.ReactNode,
  loading: boolean,
  handleClick: (direction: Direction) => void
}) => {
  const [, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-full">
      <Header handleClick={handleClick} />

      {/* TODO: Add back to top button */}
      {/* <ScrollToTopButton visible={showScrollTop} /> */}

      <main className="-mt-32">
        <div className="mx-auto max-w-full lg:px-8">
          <div className="rounded-lg bg-white lg:py-8 sm:px-6 shadow-sm">
            <div className="mx-auto max-w-7xl px-4">
              <section className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 lg:gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:min-h-screen">
                {loading ? <Loading page="workout" /> : children}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

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

  // Scroll to top when component mounts (when navigating to workout page)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

      if (status === WorkoutStatus.COMPLETED) {
        navigate('/')
      }
    } catch (err) {
      console.error('Error completing workout:', err)
    }
  }

  if (error) return <div>Error: {error.message}</div>

  return (
    <Wrapper loading={loading} handleClick={handleClick}>
      {(workout && currentCycleId) && (
        <>
          {/* Left Column - Workout Info & Coaching */}
          <div className="w-full mt-8 lg:mt-0 lg:max-w-lg lg:flex-auto lg:sticky lg:top-8 lg:self-start lg:h-fit">
            <div className="flex items-start gap-x-4 items-end">
              <div className="flex-grow">
                <h1 className="text-pretty text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                  {workout.title}
                </h1>
                <div className="flex flex-wrap gap-2 mt-4">
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
              src={getProxiedImageUrl(workout.poster)}
              className="hidden sm:block mt-8 aspect-[4/3] w-full rounded-xl bg-gray-50 object-cover lg:aspect-auto lg:h-[32rem] shadow-sm"
            />

            {/* Coaching Items for Large Screens */}
            {coachingItems.length > 0 && (
              <div className="mt-8 space-y-6">
                {coachingItems.map((item) => (
                  <WorkoutItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Exercise Items */}
          <div className="w-full lg:max-w-2xl lg:flex-auto lg:mt-16 lg:pb-20">
            <section className="space-y-6 divide-y divide-gray-300">
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
                {isCompleted
                  ? `Workout ${workoutStatus}`
                  : (canFinishCycle ? 'Finish Cycle' : 'Mark as Complete')}
              </div>
            </ButtonGroup>
          </div>
        </>
      )}
    </Wrapper>
  )
}
