import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { useAuth } from './hooks/useAuth'
import { Role } from './types'

import { Dashboard } from './pages/Dashboard'
import { Exercises } from './pages/Exercises'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Program } from './pages/Program'
import { Settings } from './pages/Settings'
import { WhoopCallback } from './pages/WhoopCallback'
import { Workout } from './pages/Workout'
import { Workouts } from './pages/Workouts'

const App = () => {
  const { isAuthenticated, user } = useAuth()

  const [role, setRole] = useState<Role | null>(null)

  useEffect(() => {
    if (!isAuthenticated) return;

    setRole(user?.is_guest ? Role.GUEST : Role.ADMIN)
  }, [user, isAuthenticated])

  return (
    <BrowserRouter>
      <Routes>
        {/* OAuth callback route - available to all users */}
        <Route path="/auth/whoop/callback" element={<WhoopCallback />} />

        {isAuthenticated ? (
          <>
            {role === Role.ADMIN && (
              <>
                <Route element={<Layout role={Role.ADMIN} />}>
                  <Route path="/" element={<Dashboard />} />
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

            {/* Fallback for authenticated users while role is loading */}
            {role === null && (
              <Route path="*" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>} />
            )}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
