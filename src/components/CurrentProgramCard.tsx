import { Loading } from '../pages/Loading'
import { ProgressBar } from './ProgressBar'
import { DashboardContent } from '../hooks/useDashboard'

type CurrentProgramCardProps = {
  currentProgram: DashboardContent['currentProgram']
  cycleProgression: DashboardContent['cycleProgression']
  loading: boolean
  userCycle: DashboardContent['userCycle']
}

export const CurrentProgramCard = ({ currentProgram, cycleProgression, loading, userCycle }: CurrentProgramCardProps) => {
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
