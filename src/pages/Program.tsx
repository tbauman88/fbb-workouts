import { usePrograms, Program as ProgramType } from '../hooks/usePrograms'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { Loading } from './Loading'

export const Program = () => {
  const { programs, loading, error } = usePrograms()
  const navigate = useNavigate()

  const handleClick = useCallback((program: ProgramType) => {
    navigate(`/programs/${program.id}`)
  }, [navigate])

  const viewCycle = useCallback((program: ProgramType, cycle: number) => {
    navigate(`/workouts/${cycle}`)
  }, [navigate])

  const getCycleClasses = (cycleId: number) =>
    cycleId === 13 ? 'bg-accent-50 text-accent-700 ring-accent-600/20' : 'bg-gray-50 text-gray-600 ring-gray-500/10'

  if (error) return <div>Error: {error.message}</div>

  return (
    <section role="list" className={`grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-16 gap-y-8`}>
      {loading ? (
        <Loading page="programs" />
      ) : (
        programs?.map((program) => (
          <section key={program.id} className="bg-white py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-8 sm:gap-y-8 xl:flex-row xl:items-stretch group">
              <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                <div
                  className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto overflow-hidden"
                  onClick={() => handleClick(program)}
                >
                  <img
                    alt=""
                    src={program.image ?? ''}
                    className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl transition-transform group-hover:scale-125 group-hover:opacity-80 cursor-pointer"
                  />
                </div>
              </div>

              <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:min-h-[450px] flex flex-col justify-center">
                <figure className="relative isolate">
                  <svg
                    fill="none"
                    viewBox="0 0 162 128"
                    aria-hidden="true"
                    className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                  >
                    <path
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    />
                    <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                  </svg>
                  <blockquote className="text-xl/8 font-semibold sm:text-2xl/9">
                    <p className="group-hover:underline group-hover:text-primary-500 transition-colors duration-300 ease-in-out">
                      {program.name}
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 text-base pr-8">
                    <div>{program.description}</div>
                    {program.cycles.map((cycle, index: number) => (
                      <span
                        key={program.name + cycle.id}
                        className={`cursor-pointer inline-flex items-center rounded-full px-2 py-1 mt-4 mr-1 text-xs font-medium ring-1 ring-inset ${getCycleClasses(
                          cycle.id
                        )}`}
                        onClick={() => viewCycle(program, cycle.firstWorkoutId)}
                      >
                        {index + 1}
                      </span>
                    ))}
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        ))
      )}
    </section>
  )
}
