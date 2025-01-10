import React from "react";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/Login";
import { Workout } from "./pages/Workout";
import { Layout } from "./pages/Layout";

function App() {
  const { isAuthenticated } = useAuth();

  if (import.meta.env.PROD && !isAuthenticated) {
    return <Login />;
  }

  const handleClick = (direction: "next" | "prev") => {
    const id =
      direction === "next" ? selectedWorkout.id + 1 : selectedWorkout.id - 1;
    navigate(`/workouts/${id}`);
  };

  return (
    <Layout name="Bauman Lift" handleClick={handleClick}>
      <Workout />
    </Layout>
  );
}

export default App;
