import { useNavigate } from 'react-router-dom'
import { useDashboard } from '../hooks/useDashboard'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { CurrentProgramCard, CurrentWorkoutCard, Divider, ProgramsList } from '../components'
import { DailyOverview } from '../components/Whoop'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (!user?.is_guest) return;
    navigate('/workouts/107')
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

        <DailyOverview />
      </div>
    </main>
  )
}
