import { marked } from 'marked'
import { Navigate, useNavigate } from 'react-router-dom'
import { DashboardContent, useDashboard } from '../hooks/useDashboard'
import { ProgressBar } from '../components'
import { Loading } from './Loading'
import { DailyOverview } from '../components/Whoop'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
const CurrentProgramCard = ({ currentProgram, cycleProgression, loading, userCycle }: {
  currentProgram: DashboardContent['currentProgram'],
  cycleProgression: DashboardContent['cycleProgression'],
  loading: boolean,
  userCycle: DashboardContent['userCycle']
}) => {
  if (loading) {
    return <Loading page="dashboard" component="current-program-card" />
  }

  if (!currentProgram || !userCycle) {
    return <Loading page="dashboard" component="current-program-card" />
  }

  return (
    <div className="lg:col-start-3 lg:row-end-1 pb-6">
      <h2 className="sr-only">Current Program</h2>

      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 space-y-6 pb-6">
        <img src={currentProgram.image ?? ''} alt="" />
        <dl className="flex flex-wrap px-6">
          <div className="flex-auto">
            <dt className="text-sm font-semibold leading-6 text-gray-900 uppercase">Current Program:</dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">{currentProgram?.name}</dd>
          </div>
          <div className="flex-none self-end">
            <dt className="sr-only">Status</dt>
            <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
              {userCycle.completed ? 'Completed' : 'Active'}
            </dd>
          </div>
        </dl>
        <ProgressBar progress={cycleProgression ?? 0} />
      </div>
    </div>
  )
}

const WorkoutStatusBadge = ({ isActiveRecovery, isRestDay }: { isActiveRecovery: boolean, isRestDay: boolean }) => {
  if (isActiveRecovery) {
    return (
      <dd className="rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
        Active Recovery Day
      </dd>
    )
  }

  if (isRestDay) {
    return (
      <dd className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">
        Rest Day
      </dd>
    )
  }
  return null
}

const TimelineItem = ({ item }: {
  item: {
    id: string,
    header?: string | null | undefined,
    notes?: string | null | undefined,
    title?: string | null | undefined
  }
}) => {

  if (item.header === '') return null

  const title = item.header || item.title

  return (
    <li className="relative flex gap-x-8">
      <div className="relative flex-none mt-1">
        <div className="h-2 w-2 rounded-full bg-gray-200 ring-1 ring-gray-400" />
        {item.notes && (
          <div className="absolute left-1 top-3 w-[1px] bg-gray-400" style={{ height: 'calc(100% - 12px)' }} />
        )}
      </div>

      <div className="flex-1 space-y-3">
        {title && (
          <div className="flex items-baseline gap-x-3">
            <div
              className={`min-w-[120px] text-sm font-semibold uppercase ${item.title ? 'text-gray-500' : 'text-gray-900'
                }`}
              dangerouslySetInnerHTML={{ __html: marked(title) }}
            />
          </div>
        )}

        {item.notes && (
          <div className="text-sm text-gray-600">
            <div className="[&>p]:mb-4 last:[&>p]:mb-0" dangerouslySetInnerHTML={{ __html: marked(item.notes) }} />
          </div>
        )}
      </div>
    </li>
  )
}

const CurrentWorkoutCard = ({ currentWorkout, onClick, loading }: {
  currentWorkout: DashboardContent['currentWorkout'],
  onClick: (id: string) => void,
  loading: boolean
}) => {
  if (loading || !currentWorkout) {
    return <Loading page="dashboard" component="current-workout-card" />
  }

  return (
    <div className="-mx-4 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pb-6 mt-6 border-b border-gray-900/5">
            <dt className="text-sm font-semibold leading-6 text-gray-900 uppercase">Daily Training:</dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">{currentWorkout?.title}</dd>
          </div>

          <div className="flex-none self-end px-6 pt-4 pb-6 mt-6 border-b border-gray-900/5">
            <dt className="sr-only">Is Rest Day?</dt>
            <WorkoutStatusBadge
              isActiveRecovery={currentWorkout.isActiveRecovery}
              isRestDay={currentWorkout.isRestDay}
            />
          </div>

          <ul role="list" className="mt-6 space-y-4 px-6 w-full">
            {currentWorkout.items.map((item, index) => <TimelineItem key={`${item.id}-${index}`} item={item} />)}
          </ul>
        </dl>

        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <a
            onClick={() => onClick(currentWorkout.id)}
            className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
          >
            Proceed to workout <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const ProgramsList = ({ programs, loading }: { programs: DashboardContent['programs'], loading: boolean }) => {
  if (loading || !programs) {
    return <Loading page="dashboard" component="programs-list" />
  }

  return (
    <section className="hidden md:block flex flex-col bg-white m-auto p-auto">
      <h2 className="flex pb-5 font-medium text-2xl text-gray-900 uppercase">Programs</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap">
          {programs.map((program, index) => (
            <div key={program.name} className={`inline-block ${index === programs.length - 1 ? 'pr-0' : 'pr-6'}`}>
              <div className="min-w-[300px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={program.image ?? ''} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Divider = () => (
  <div className="hidden md:block relative py-10">
    <div aria-hidden="true" className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-300" />
    </div>
  </div>
)

export const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (!user?.is_guest) return;
    navigate('/workouts/106')
  }, [user])

  const { currentProgram, currentWorkout, cycleProgression, programs, userCycle, loading } = useDashboard()

  const navigateToWorkout = (id: string | undefined) => {
    if (!id) return
    navigate(`/workouts/${id}`)
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <CurrentWorkoutCard loading={loading} onClick={navigateToWorkout} currentWorkout={currentWorkout} />
          <CurrentProgramCard
            loading={loading}
            currentProgram={currentProgram}
            cycleProgression={cycleProgression}
            userCycle={userCycle}
          />
        </section>

        <Divider />

        <ProgramsList loading={loading} programs={programs} />

        {/* <DailyOverview /> */}
      </div>
    </main>
  )
}
