import { useNavigate } from 'react-router-dom'
import { useDashboard } from '../hooks/useDashboard'
import {
  CurrentProgramCard,
  CurrentWorkoutCard,
  Divider,
  ProgramsList,
  RecoveryCard,
  SleepCard,
  StrainCard,
} from '../components'
import { WorkoutActivityCard } from '../components/Whoop/components/WorkoutActivityCard'

export const Dashboard = () => {
  const navigate = useNavigate()

  const { currentProgram, currentWorkout, cycleProgression, programs, userCycle, loading } = useDashboard()

  const navigateToWorkout = (id: string | undefined) => {
    if (!id) return
    navigate(`/workouts/${id}`)
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="lg:mx-auto grid lg:max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <CurrentWorkoutCard loading={loading} onClick={navigateToWorkout} currentWorkout={currentWorkout} />
          <CurrentProgramCard
            loading={loading}
            currentProgram={currentProgram}
            cycleProgression={cycleProgression}
            userCycle={userCycle}
          />
        </section>

        <section className="lg:mx-auto grid lg:max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 my-8">
          <RecoveryCard />
          <StrainCard />
          <SleepCard />
        </section>

        <WorkoutActivityCard />

        <Divider />

        <ProgramsList loading={loading} programs={programs} />
      </div>
    </main>
  )
}
