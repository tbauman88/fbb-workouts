import { Skeleton } from '../components'

interface LoadingProps {
  page: 'exercises' | 'workouts' | 'programs'
}

const ExercisesLoading = () => (
  <ul
    role="list"
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-x-3 gap-y-6 px-4 lg:px-0 py-4"
  >
    {Array.from({ length: 16 }).map((_, index) => (
      <li key={index} className="relative">
        <div className="mb-2 group overflow-hidden rounded-lg bg-gray-100">
          <Skeleton width="100%" height="300px" />
        </div>
        <Skeleton width="100%" height="20px" className="mt-2" />
      </li>
    ))}
  </ul>
)

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

export const Loading = ({ page }: LoadingProps) => {
  switch (page) {
    case 'workouts':
      return <WorkoutsLoading {...{ page }} />
    case 'exercises':
      return <ExercisesLoading />
    case 'programs':
      return <ProgramsLoading />
    default:
      return <div>Loading...</div> // Fallback loading state
  }
}
