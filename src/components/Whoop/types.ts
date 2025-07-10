import { Cycle, Recovery, Sleep, Workout } from "types";

export enum WhoopColor {
  CTA = "#00F19F",
  Strain = "#0093E7",
  Sleep = "#7BA1BB",
  Recovery = "#67AEE6",
}

export enum RecoveryColor {
  High = "#16EC06",
  Moderate = "#FFDE00",
  Low = "#FF0026",
  Default = "#f87171",
}

export enum StrainLabel {
  AllOut = "All Out",
  High = "High",
  Moderate = "Moderate",
  Light = "Light",
}

export enum SleepLabel {
  Excellent = "Excellent",
  Good = "Good",
  Fair = "Fair",
  Poor = "Poor",
}

export enum RecoveryLabel {
  High = "High",
  Moderate = "Moderate",
  Low = "Low",
}

export enum WorkoutMetricColor {
  Duration = WhoopColor.Strain,
  Calories = "FA8128",
  HeartRate = RecoveryColor.Low,
  MaxHeartRate = RecoveryColor.Moderate,
}

export enum ZoneColor {
  Zone0 = "#e7e5e4",
  Zone1 = WhoopColor.Sleep,
  Zone2 = WhoopColor.Strain,
  Zone3 = WhoopColor.CTA,
  Zone4 = RecoveryColor.Default,
  Zone5 = RecoveryColor.Low,
}

export type ZoneDuration = Workout['score']['zone_duration']

export interface WhoopState {
  data: WhoopOverview | null;
  loading: boolean;
  error?: Error;
  hasTokens: boolean;
}

export interface WhoopOverview {
  cycle: Cycle;
  sleep: Sleep;
  recovery: Recovery;
  workouts: Workout[];
}
