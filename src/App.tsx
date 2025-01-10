import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

import { Login } from "./pages/Login";
import { Workout } from "./pages/Workout";
import { Layout } from "./pages/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Programs } from "./pages/Programs";
import { Program } from "./pages/Program";
import { Workouts } from "./pages/Workouts";
import { Exercises } from "./pages/Exercises";
import { NotFound } from "./pages/NotFound";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

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
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<Program />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="exercises" element={<Exercises />} />
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
  );
}

export default App;
