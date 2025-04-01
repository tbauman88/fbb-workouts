import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useAuth } from './hooks/useAuth'
import { Layout } from './components/Layout'
import { Role } from './types'

import { Login } from './pages/Login'
import { Workout } from './pages/Workout'
import { Dashboard } from './pages/Dashboard'
import { Program } from './pages/Program'
import { Workouts } from './pages/Workouts'
import { Exercises } from './pages/Exercises'
import { NotFound } from './pages/NotFound'
import { Settings } from './pages/Settings'

const App = () => {
  const { isAuthenticated, user } = useAuth()

  const [role, setRole] = useState<Role | null>(null)

  useEffect(() => {
    if (!isAuthenticated) return;

    setRole(user?.is_guest ? Role.GUEST : Role.ADMIN)
  }, [user])

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            {role === Role.ADMIN && (
              <>
                <Route element={<Layout role={Role.ADMIN} />}>
                  <Route index element={<Dashboard />} />
                  <Route path="programs" element={<Program />} />
                  <Route path="programs/:id" element={<Program />} />
                  <Route path="workouts" element={<Workouts />} />
                  <Route path="exercises" element={<Exercises />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/workouts/:id" element={<Workout />} />
              </>
            )}

            {role === Role.GUEST && (
              <>
                <Route element={<Layout role={Role.GUEST} />}>
                  <Route path="exercises" element={<Exercises />} />
                </Route>
                <Route path="/workouts/:id" element={<Workout />} />
                <Route path="*" element={<Navigate to="/workouts/107" replace />} />
              </>
            )}
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
