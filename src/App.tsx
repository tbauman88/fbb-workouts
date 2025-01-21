import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'
import { Layout } from './components/Layout'
import { UserProvider } from './context/UserProvider'

import { Login } from './pages/Login'
import { Workout } from './pages/Workout'
import { Dashboard } from './pages/Dashboard'
import { Programs } from './pages/Programs'
import { Program } from './pages/Program'
import { Workouts } from './pages/Workouts'
import { Exercises } from './pages/Exercises'
import { NotFound } from './pages/NotFound'
import { Settings } from './pages/Settings'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <UserProvider user={user}>{children}</UserProvider>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index path="/" element={<Dashboard />} />
          <Route path="programs" element={<Program />} />
          <Route path="programs/:id" element={<Programs />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="settings" element={<Settings />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="/workouts/:id"
          element={
            <ProtectedRoute>
              <Workout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
