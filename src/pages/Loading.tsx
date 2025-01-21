import { Skeleton } from '../components'

interface LoadingProps {
  page: 'dashboard' | 'exercises' | 'programs' | 'workouts' | 'workout'
  component?: 'current-program-card' | 'current-workout-card' | 'programs-list'
}

const ExercisesLoading = () =>
  Array.from({ length: 16 }).map((_, index) => (
    <li key={index} className="relative">
      <div className="mb-2 group overflow-hidden rounded-lg bg-gray-100 aspect-[10/7]">
        <Skeleton width="100%" height="336px" />
      </div>
      <Skeleton width="100%" height="20px" className="mt-2" />
    </li>
  ))

const WorkoutsLoading = ({ page }: LoadingProps) =>
  Array.from({ length: 6 }).map((_, i) => (
    <div className="flex flex-col gap-8 lg:flex-row" key={`${i}-${page}`}>
      <Skeleton width="256px" height="256px" className="rounded-lg" />
      <div className="flex-1 flex flex-col justify-center">
        <Skeleton width="25%" height="24px" />

        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={`${page}-${index}`}
            width={`${Math.floor(Math.random() * 10) + 35}%`}
            height="15px"
            className={index === 0 ? 'mt-8' : 'mt-2'}
          />
        ))}
      </div>
    </div>
  ))

const ProgramsLoading = () =>
  Array.from({ length: 6 }).map((_, index) => {
    const descriptionLines = Math.floor(Math.random() * 4) + 2 // Random number between 2 and 5
    const cycleCount = Math.floor(Math.random() * 6) + 5 // Random number between 5 and 10

    return (
      <section key={index} className="bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-8 sm:gap-y-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto overflow-hidden">
              <Skeleton width="100%" height="510px" className="rounded-2xl" />
            </div>
          </div>

          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:min-h-[450px] flex flex-col justify-center">
            <figure className="relative isolate">
              <Skeleton width="60%" height="24px" className="mb-12" />
              <Skeleton width="80%" height="16px" className="mb-2" />
              {Array.from({ length: descriptionLines }).map((_, lineIndex) => (
                <Skeleton
                  key={lineIndex}
                  width={`${Math.floor(Math.random() * 20) + 50}%`}
                  height="16px"
                  className={lineIndex === 0 ? 'mt-8' : 'mt-2'}
                />
              ))}
              <div className="flex flex-wrap mt-6">
                {Array.from({ length: cycleCount }).map((_, cycleIndex) => (
                  <Skeleton key={cycleIndex} width="24px" height="24px" className="mr-2 mb-2 rounded-full" /> // Placeholder for cycle buttons
                ))}
              </div>
            </figure>
          </div>
        </div>
      </section>
    )
  })

const WorkoutLoading = () => {
  return (
    <>
      <div className="w-full mt-8 lg:mt-0 lg:max-w-lg lg:flex-auto lg:sticky lg:top-16 lg:self-start lg:h-screen">
        <div className="flex items-start gap-x-3 items-end">
          <div className="flex-grow">
            <Skeleton width="80%" height="36px" className="mb-2" /> {/* Title */}
            <Skeleton width="60%" height="24px" className="mb-4" /> {/* Subtitle */}
          </div>
        </div>

        {/* Main workout image */}
        <Skeleton width="100%" height="400px" className="hidden sm:block mt-8 rounded-2xl" />

        {/* Coaching items */}
        <div className="mt-8 space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <article key={i} className="py-6">
              <Skeleton width="40%" height="24px" className="mb-4" />
              <Skeleton width="100%" height="100px" className="mb-4 rounded-lg" />
              <Skeleton width="90%" height="16px" className="mb-2" />
              <Skeleton width="80%" height="16px" />
            </article>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:max-w-2xl lg:flex-auto lg:mt-24">
        <section className="-my-6 divide-y divide-gray-100">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="py-6">
              <Skeleton width="30%" height="24px" className="mb-4" />
              <div className="space-y-4">
                <Skeleton width="100%" height="80px" className="rounded-lg" />
                <Skeleton width="90%" height="16px" className="mb-2" />
                <Skeleton width="85%" height="16px" />
              </div>
            </article>
          ))}
        </section>

        {/* Complete button */}
        <div className="my-8">
          <Skeleton width="100%" height="48px" className="rounded-md" />
        </div>
      </div>
    </>
  )
}

const LoadingCurrentProgramCard = () => (
  <div className="lg:col-start-3 lg:row-end-1 pb-6">
    <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 space-y-6 pb-6">
      <Skeleton width="100%" height="256px" /> {/* Program image */}
      <dl className="flex flex-wrap px-6">
        <div className="flex-auto">
          <Skeleton width="120px" height="24px" className="mb-2" /> {/* Current Program label */}
          <Skeleton width="200px" height="24px" /> {/* Program name */}
        </div>
        <div className="flex-none self-end">
          <Skeleton width="60px" height="24px" className="rounded-md" /> {/* Status badge */}
        </div>
      </dl>
      <div className="px-6">
        <Skeleton width="100%" height="8px" /> {/* Progress bar */}
      </div>
    </div>
  </div>
)

const LoadingCurrentWorkoutCard = () => (
  <div className="-mx-4 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
    <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
      <dl className="flex flex-wrap">
        <div className="flex-auto pl-6 py-6 border-b border-gray-900/5">
          <Skeleton width="120px" height="20px" className="mb-2" /> {/* Daily Training label */}
          <Skeleton width="240px" height="24px" /> {/* Workout title */}
        </div>

        {/* Timeline items */}
        <ul role="list" className="mt-6 space-y-4 px-6 w-full">
          {Array.from({ length: 7 }).map((i, index) => (
            <li key={index} className="relative flex gap-x-8">
              <div className="relative flex-none mt-1">
                <div className="h-2 w-2 rounded-full bg-gray-200 ring-1 ring-gray-400" />
                {index === 0 && (
                  <div className="absolute left-1 top-3 w-[1px] bg-gray-400" style={{ height: 'calc(100% - 12px)' }} />
                )}
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-baseline gap-x-3">
                  <Skeleton width="120px" height="21px" /> {/* Timeline header */}
                </div>
                {index === 0 && (
                  <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} width={`${Math.floor(Math.random() * 16) + 75}%`} height="16px" />
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </dl>

      <div className="mt-6 border-t border-gray-900/5 p-6">
        <Skeleton width="150px" height="20px" /> {/* Proceed to workout link */}
      </div>
    </div>
  </div>
)

const LoadingProgramsList = () => (
  <section className="hidden md:block flex flex-col bg-white m-auto p-auto">
    <Skeleton width="180px" height="32px" className="mb-5" /> {/* Programs header */}
    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div className="flex flex-nowrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="inline-block pr-6">
            <div className="min-w-[300px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white">
              <Skeleton width="300px" height="200px" /> {/* Program card image */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export const Loading: React.FC<LoadingProps> = ({ page, component }) => {
  const pageComponents: Record<string, React.ReactNode> = {
    exercises: <ExercisesLoading />,
    programs: <ProgramsLoading />,
    workouts: <WorkoutsLoading page={page} />,
    workout: <WorkoutLoading />
  }

  const dashboardComponents: Record<string, React.ReactNode> = {
    'current-program-card': <LoadingCurrentProgramCard />,
    'current-workout-card': <LoadingCurrentWorkoutCard />,
    'programs-list': <LoadingProgramsList />
  }

  if (page === 'dashboard' && component) {
    return dashboardComponents[component] || <div>Loading...</div>
  }

  return pageComponents[page] || <div>Loading...</div>
}
