import './App.css'
import { useWorkouts } from './hooks/useWorkouts'

function App() {
  const { items, loading, error } = useWorkouts()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  console.log(items);
  

  return (
    <div className="App">
      <h1>Workouts</h1>
      <div className="workouts-list">
        {items.map(workout => (
          <div key={workout.date} className="workout-card">
            <div className="workout-header">
              <h2>{workout.title}</h2>
              <span className="cycle">Cycle {workout.cycle}</span>
            </div>
            <h3>{workout.subtitle}</h3>

            <p className="date">
              {new Date(workout.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App