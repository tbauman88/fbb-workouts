import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'
import { Layout } from './components/Layout'

import { Login } from './pages/Login'
import { Workout } from './pages/Workout'
import { Dashboard } from './pages/Dashboard'
import { Programs } from './pages/Programs'
import { Program } from './pages/Program'
import { Workouts } from './pages/Workouts'
import { Exercises } from './pages/Exercises'
import { NotFound } from './pages/NotFound'
import { Settings } from './pages/Settings'

const ProtectedRoute = ({ component: Component }: { component: React.ComponentType }) => {
  const { isAuthenticated } = useAuth()

  console.log('ProtectedRoute::', isAuthenticated)
  return isAuthenticated ? <Component /> : <Navigate to="/login" replace />
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute component={Layout} />}>
          <Route index element={<Dashboard />} />
          <Route path="programs" element={<Program />} />
          <Route path="programs/:id" element={<Programs />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="/workouts/:id"
          element={<ProtectedRoute component={Workout} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
