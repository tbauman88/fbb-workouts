import React from "react";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/Login";
import { Workout } from "./pages/Workout";

function App() {
  const { isAuthenticated } = useAuth();

  if (import.meta.env.PROD && !isAuthenticated) {
    return <Login />;
  }

  return <Workout />;
}

export default App;
