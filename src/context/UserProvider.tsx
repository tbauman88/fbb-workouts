import React, { createContext, useContext } from "react";
import { useUser } from "../hooks/useUser";
import { useWorkout } from "../hooks/useWorkout";
import { UserEntity, ProgramEntity, WorkoutEntity } from "../types";
import { PROGRAM_NAME_MAP } from "../hooks/usePrograms";

interface UserContextType {
  user: UserEntity | null;
  currentProgram: ProgramEntity | null;
  currentWorkout: WorkoutEntity | null;
  loading: boolean;
  error: Error | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { user, loading, error } = useUser(1);

  const program = user?.user_cycles[0]?.cycle?.program;

  const { workout } = useWorkout(user?.user_cycles[0]?.current_workout);

  const currentUser = {
    ...user,
    workouts: user?.user_cycles[0]?.cycle.workouts
  };

  const currentWorkout = {
    ...workout,
    workout_items: workout?.workout_items?.slice(0, 2)
  };

  const currentProgram = {
    ...program,
    name: program ? PROGRAM_NAME_MAP[program.name] || program.name : null
  };

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        currentProgram,
        currentWorkout,
        loading,
        error
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
