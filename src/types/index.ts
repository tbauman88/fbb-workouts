export interface Exercise {
  demo_video_id: string;
  demo_video_title: string;
  demo_video_url: string | null;
  demo_video_thumb: string;
  demo_video_poster?: string;
  levels: string[];
  hidden?: boolean;
  scaleOptions?: boolean;
  title: string;
  subtitle?: string;
  notes?: string | null;
}

export interface ExerciseDetails {
  id: number;
  exercise_id: number;
  workout_item_id: number;
  title: string;
  subtitle?: string;
  levels: string;
  exercise: Exercise;
}

export interface WorkoutItem {
  id: number;
  header?: string;
  title?: string;
  exercise_details: Exercise[];
  notes?: string | null;
  score?: string;
}

export interface Workout {
  id: number;
  title: string;
  subtitle: string;
  poster: string;
  isRestDay: boolean;
  isActiveRecovery: boolean;
  description: string;
  date: string;
  cycle: number;
  workout_items: WorkoutItem[];
  notes?: string | null;
}

export interface Program {
  id: number;
  name: string;
  description: string;
  image: string;
  newCycles?: {
    id: number;
    cycle_number: number;
  }[];
}

export interface UserCycle {
  id: number;
  cycle_id: number;
  current_workout: number;
  start_date: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
  cycle: Cycle;
}

export interface User {
  id: number;
  email: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  user_cycles: UserCycle[];
}

export interface Cycle {
  id: number;
  cycle_number: number;
  date: string;
  bridge_week: boolean;
  program: Program;
  workouts: Workout[];
}

export interface ProgramCardProps {
  program: Program;
  handleClick: () => void;
  title: string;
  includeFooter?: boolean;
  children?: React.ReactNode;
}
