import { Loading } from '../pages/Loading'
import { DashboardContent } from '../hooks/useDashboard'

type ProgramsListProps = {
  programs: DashboardContent['programs']
  loading: boolean
}

export const ProgramsList = ({ programs, loading }: ProgramsListProps) => {
  if (loading || !programs) {
    return <Loading page="dashboard" component="programs-list" />
  }

  return (
    <section className="hidden md:block flex flex-col bg-white m-auto p-auto">
      <h2 className="flex pb-5 font-medium text-2xl text-gray-900 uppercase">Programs</h2>
      <div className="flex overflow-x-scroll pb-10 hide-scrollbar">
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
