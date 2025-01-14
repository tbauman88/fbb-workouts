import { marked } from 'marked'
import { useNavigate } from 'react-router-dom'
import { usePrograms } from '../hooks/usePrograms'
import { useUserContext } from '../context/UserProvider'
import { ProgressBar } from '../components'

export const Dashboard = () => {
  const { user, currentProgram, currentWorkout, currentWorkoutIndex, cycleProgression } = useUserContext()
  const { programs, loading, error } = usePrograms()

  const navigate = useNavigate()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const navigateToWorkout = (id: number | undefined) => {
    if (!id) return
    navigate(`/workouts/${id}`)
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:col-start-3 lg:row-end-1 pb-6">
            <h2 className="sr-only">Current Program</h2>
            <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 space-y-6 pb-6">
              <img src={currentProgram?.image} alt="" />

              <dl className="flex flex-wrap px-6">
                <div className="flex-auto">
                  <dt className="text-sm font-semibold leading-6 text-gray-900 uppercase">Current Program:</dt>
                  <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">{currentProgram?.name}</dd>
                </div>
                <div className="flex-none self-end">
                  <dt className="sr-only">Status</dt>
                  <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                    Active
                  </dd>
                </div>
              </dl>

              <ProgressBar progress={cycleProgression} />
            </div>
          </div>

          <div className="-mx-4 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2 ">
            <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
              <dl className="flex flex-wrap">
                <div className="flex-auto pl-6 pb-6 mt-6 border-b border-gray-900/5">
                  <dt className="text-sm font-semibold leading-6 text-gray-900 uppercase">
                    Daily Training (Day {currentWorkoutIndex} of {user.totalWorkouts})
                  </dt>
                  <dd className="mt-1 text-base font-semibold leading-6 text-gray-900 ">{currentWorkout?.title}</dd>
                </div>
                <div className="flex-none self-end px-6 pt-4 pb-6 mt-6 border-b border-gray-900/5">
                  <dt className="sr-only">Is Rest Day?</dt>
                  {currentWorkout?.isActiveRecovery && (
                    <dd className="rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
                      Active Recovery Day
                    </dd>
                  )}

                  {currentWorkout?.isRestDay && (
                    <dd className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
                      Rest Day
                    </dd>
                  )}
                </div>
                <ul role="list" className="mt-6 space-y-6 px-6">
                  {currentWorkout?.workout_items?.map((item, index) => (
                    <li key={item.id} className="relative flex">
                      <div className="relative flex h-full flex-none items-center justify-center pt-2">
                        {index !== currentWorkout?.workout_items.length - 1 && (
                          <div className="absolute top-4 w-px h-[calc(100%+136px)] bg-gray-900" />
                        )}
                        <div className="h-2 w-2 rounded-full bg-gray-100 ring-1 ring-gray-900" />
                      </div>

                      <div className="flex-1">
                        <div className="flex w-full flex-none gap-x-4 px-6">
                          <dt className="flex-none">
                            <span className="sr-only">Client</span>
                          </dt>
                          <dd className="text-sm font-semibold leading-6 text-gray-900 uppercase">{item.header}</dd>
                        </div>
                        <div className="mt-2 flex w-full flex-none gap-x-4 px-6">
                          <dt className="flex-none">
                            <span className="sr-only">{item.notes}</span>
                          </dt>
                          <dd className="text-sm leading-6 text-gray-500">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: marked(item.notes)
                              }}
                            />
                          </dd>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </dl>

              <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                <a
                  onClick={() => navigateToWorkout(currentWorkout?.id)}
                  className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                >
                  Proceed to workout <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative py-10">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>

        <section className="flex flex-col bg-white m-auto p-auto">
          <h2 className="flex pb-5 font-medium text-2xl text-gray-900 uppercase">Programs</h2>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap">
              {programs.map((program, index) => (
                <div key={program.name} className={`inline-block ${index === programs.length - 1 ? 'pr-0' : 'pr-6'}`}>
                  <div className="min-w-[300px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img src={program.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
