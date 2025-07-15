import { Cycle, Recovery, Sleep, Workout } from "types";

export * from "types/whoop";

/**
 * Official WHOOP brand colors used throughout the UI
 */
export enum WhoopColor {
  /** Primary call-to-action color */
  CTA = "#00F19F",
  /** Color associated with strain/workout activities */
  Strain = "#0093E7",
  /** Color associated with sleep data */
  Sleep = "#7BA1BB",
  /** Color associated with recovery metrics */
  Recovery = "#67AEE6",
}

/**
 * Color coding for recovery scores
 * Based on WHOOP's recovery percentage thresholds
 */
export enum RecoveryColor {
  /** High recovery (typically 67%+) - Green */
  High = "#16EC06",
  /** Moderate recovery (typically 34-66%) - Yellow */
  Moderate = "#FFDE00",
  /** Low recovery (typically 0-33%) - Red */
  Low = "#FF0026",
  /** Default/fallback color */
  Default = "#f87171",
}

/**
 * Strain level categories based on WHOOP's 0-21 strain scale
 * Helps categorize workout intensity and daily strain
 */
export enum StrainLabel {
  /** Very high intensity (typically 18-21 strain) */
  AllOut = "All Out",
  /** High intensity (typically 14-17 strain) */
  High = "High",
  /** Moderate intensity (typically 10-13 strain) */
  Moderate = "Moderate",
  /** Light intensity (typically 0-9 strain) */
  Light = "Light",
}

/**
 * Sleep performance categories based on WHOOP's sleep performance percentage
 * Indicates how well the user slept relative to their needs
 */
export enum SleepLabel {
  /** Excellent sleep performance (typically 85%+) */
  Excellent = "Excellent",
  /** Good sleep performance (typically 70-84%) */
  Good = "Good",
  /** Fair sleep performance (typically 55-69%) */
  Fair = "Fair",
  /** Poor sleep performance (typically <55%) */
  Poor = "Poor",
}

/**
 * Recovery level labels corresponding to recovery percentage ranges
 * Used to provide user-friendly descriptions of recovery state
 */
export enum RecoveryLabel {
  /** High recovery state (67%+) - ready for high strain */
  High = "High",
  /** Moderate recovery state (34-66%) - balanced training recommended */
  Moderate = "Moderate",
  /** Low recovery state (0-33%) - rest or light activity recommended */
  Low = "Low",
}

/**
 * Color scheme for different workout metrics displayed in the UI
 */
export enum WorkoutMetricColor {
  /** Color for workout duration displays */
  Duration = WhoopColor.Strain,
  /** Color for calorie/energy expenditure (kilojoule) displays */
  Calories = "FA8128",
  /** Color for average heart rate displays */
  HeartRate = RecoveryColor.Low,
  /** Color for maximum heart rate displays */
  MaxHeartRate = RecoveryColor.Moderate,
}

/**
 * Heart rate zone colors following WHOOP's zone visualization
 * Zones represent different intensity levels based on percentage of max heart rate
 */
export enum ZoneColor {
  /** Zone 0: Very light activity (<50% max HR) */
  Zone0 = "#E8EDF2",
  /** Zone 1: Light activity (50-60% max HR) */
  Zone1 = "#B9CBD6",
  /** Zone 2: Moderate activity (60-70% max HR) */
  Zone2 = "#4DA1BF",
  /** Zone 3: Hard activity (70-80% max HR) */
  Zone3 = "#5DBB9D",
  /** Zone 4: Very hard activity (80-90% max HR) */
  Zone4 = "#F9A450",
  /** Zone 5: Maximum effort (90%+ max HR) */
  Zone5 = "#FF5A00",
}

/**
 * Global state interface for WHOOP integration
 * Manages authentication status and data loading states
 */
export interface WhoopState {
  /** Current WHOOP data overview, null when not loaded */
  data: WhoopOverview | null;
  /** Loading state for API requests */
  loading: boolean;
  /** Error object if API requests fail */
  error?: Error;
  /** Whether user has valid OAuth tokens for WHOOP API access */
  hasTokens: boolean;
}

/**
 * Comprehensive WHOOP data overview for dashboard display
 * Contains the most recent cycle data and associated metrics
 */
export interface WhoopOverview {
  /** Current physiological cycle data (24-hour period from wake to wake) */
  cycle: Cycle;
  /** Sleep data for the most recent sleep session */
  sleep: Sleep;
  /** Recovery data calculated from HRV, RHR, and sleep metrics */
  recovery: Recovery;
  /** Array of recent workout activities with scoring data */
  workouts: Workout[];
}
