import { DashboardContent } from 'hooks/useDashboard'
import { Loading } from 'pages/Loading'
import { ProgressBar } from './ProgressBar'

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

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <img
          src={currentProgram.image ?? ''}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="p-6">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                Current Program
              </p>
              <h4 className="text-lg font-semibold text-gray-900">
                {currentProgram?.name}
              </h4>
            </div>
            <span className={`px-3 py-1 text-xs font-medium rounded-md ring-1 ring-inset ${userCycle.completed
              ? 'bg-secondary-500 text-white ring-secondary-500/20'
              : 'bg-primary-500 text-white ring-primary-500/20'
              }`}>
              {userCycle.completed ? 'Completed' : 'Active'}
            </span>
          </div>

          <ProgressBar progress={cycleProgression ?? 0} />
        </div>
      </div>
    </div>
  )
} 
