/**
 * Scoring data for a physiological cycle
 * Contains strain and cardiovascular metrics for a 24-hour cycle
 */
export interface CycleScore {
  /** Strain score (0-21 scale) representing physiological stress during the cycle */
  strain: number;
  /** Energy expenditure in kilojoules during the cycle */
  kilojoule: number;
  /** Average heart rate in beats per minute during the cycle */
  average_heart_rate: number;
  /** Maximum heart rate in beats per minute recorded during the cycle */
  max_heart_rate: number;
}

/**
 * A WHOOP physiological cycle representing a 24-hour period from wake to wake
 * Cycles are the foundation of WHOOP's data model, tracking daily strain and recovery
 */
export interface Cycle {
  /** Unique identifier for the cycle */
  id: number;
  /** ID of the WHOOP user who owns this cycle */
  user_id: number;
  /** ISO 8601 timestamp when the cycle was created in WHOOP's system */
  created_at: string;
  /** ISO 8601 timestamp when the cycle was last updated */
  updated_at: string;
  /** ISO 8601 timestamp marking the start of the cycle (typically wake time) */
  start: string;
  /** ISO 8601 timestamp marking the end of the cycle, null if cycle is ongoing */
  end: string | null;
  /** Timezone offset in format '+hh:mm', '-hh:mm', or 'Z' when cycle was recorded */
  timezone_offset: string;
  /** Scoring state: 'SCORED', 'PENDING_SCORE', or 'UNSCORABLE' */
  score_state: string;
  /** Calculated metrics for the cycle, only present when score_state is 'SCORED' */
  score: CycleScore;
}

/**
 * Detailed breakdown of sleep stages and disturbances
 * All time measurements are in milliseconds
 */
export interface StageSummary {
  /** Total time spent in bed (including awake time) in milliseconds */
  total_in_bed_time_milli: number;
  /** Total time spent awake while in bed in milliseconds */
  total_awake_time_milli: number;
  /** Total time with no sensor data in milliseconds */
  total_no_data_time_milli: number;
  /** Total time spent in light sleep (N1 + N2) in milliseconds */
  total_light_sleep_time_milli: number;
  /** Total time spent in slow wave sleep (N3/deep sleep) in milliseconds */
  total_slow_wave_sleep_time_milli: number;
  /** Total time spent in REM sleep in milliseconds */
  total_rem_sleep_time_milli: number;
  /** Number of complete sleep cycles experienced */
  sleep_cycle_count: number;
  /** Number of sleep disturbances/awakenings detected */
  disturbance_count: number;
}

/**
 * Sleep debt and recovery recommendations
 * Calculates how much sleep is needed based on various factors
 */
export interface SleepNeeded {
  /** Baseline sleep need in milliseconds (personal average requirement) */
  baseline_milli: number;
  /** Additional sleep needed to recover from existing sleep debt in milliseconds */
  need_from_sleep_debt_milli: number;
  /** Additional sleep needed to recover from recent strain/stress in milliseconds */
  need_from_recent_strain_milli: number;
  /** Sleep need adjustment based on recent naps in milliseconds */
  need_from_recent_nap_milli: number;
}

/**
 * Comprehensive sleep analysis and scoring metrics
 * Provides detailed insights into sleep quality and recovery
 */
export interface SleepScore {
  /** Breakdown of time spent in each sleep stage */
  stage_summary: StageSummary;
  /** Sleep debt and recovery recommendations */
  sleep_needed: SleepNeeded;
  /** Average respiratory rate during sleep in breaths per minute */
  respiratory_rate: number;
  /** Sleep performance score as percentage (0-100%) comparing actual vs needed sleep */
  sleep_performance_percentage: number;
  /** Sleep consistency score as percentage (0-100%) based on sleep timing regularity */
  sleep_consistency_percentage: number;
  /** Sleep efficiency percentage (time asleep / time in bed) */
  sleep_efficiency_percentage: number;
}

/**
 * A WHOOP sleep session with detailed analysis
 * Represents either a main sleep period or a nap
 */
export interface Sleep {
  /** Unique identifier for the sleep session */
  id: number;
  /** ID of the WHOOP user who owns this sleep data */
  user_id: number;
  /** ISO 8601 timestamp when the sleep was recorded in WHOOP's system */
  created_at: string;
  /** ISO 8601 timestamp when the sleep data was last updated */
  updated_at: string;
  /** ISO 8601 timestamp when sleep began */
  start: string;
  /** ISO 8601 timestamp when sleep ended */
  end: string;
  /** Timezone offset in format '+hh:mm', '-hh:mm', or 'Z' when sleep was recorded */
  timezone_offset: string;
  /** Whether this sleep session was classified as a nap (true) or main sleep (false) */
  nap: boolean;
  /** Scoring state: 'SCORED', 'PENDING_SCORE', or 'UNSCORABLE' */
  score_state: string;
  /** Detailed sleep analysis and metrics, only present when score_state is 'SCORED' */
  score: SleepScore;
}

/**
 * Recovery metrics derived from heart rate variability and physiological data
 * Used to assess readiness for training and stress
 */
export interface RecoveryScore {
  /** Whether the user is still in calibration period (affects score reliability) */
  user_calibrating: boolean;
  /** Recovery score as percentage (0-100%), higher indicates better recovery */
  recovery_score: number;
  /** Resting heart rate in beats per minute */
  resting_heart_rate: number;
  /** Heart rate variability (RMSSD) in milliseconds, measure of autonomic recovery */
  hrv_rmssd_milli: number;
  /** Blood oxygen saturation percentage (SpO2) */
  spo2_percentage: number;
  /** Skin temperature in Celsius */
  skin_temp_celsius: number;
}

/**
 * Recovery assessment for a physiological cycle
 * Combines sleep quality, HRV, and other metrics to determine readiness
 */
export interface Recovery {
  /** ID of the cycle this recovery data belongs to */
  cycle_id: number;
  /** ID of the sleep session used to calculate this recovery */
  sleep_id: number;
  /** ID of the WHOOP user who owns this recovery data */
  user_id: number;
  /** ISO 8601 timestamp when the recovery was calculated */
  created_at: string;
  /** ISO 8601 timestamp when the recovery data was last updated */
  updated_at: string;
  /** Scoring state: 'SCORED', 'PENDING_SCORE', or 'UNSCORABLE' */
  score_state: string;
  /** Detailed recovery metrics, only present when score_state is 'SCORED' */
  score: RecoveryScore;
}

/**
 * Zone duration breakdown for workout heart rate analysis
 * All durations are in milliseconds spent in each heart rate zone
 */
export interface ZoneDurations {
  /** Time in Zone 0 (very light activity, <50% max HR) in milliseconds */
  zone_zero_milli: number;
  /** Time in Zone 1 (light activity, 50-60% max HR) in milliseconds */
  zone_one_milli: number;
  /** Time in Zone 2 (moderate activity, 60-70% max HR) in milliseconds */
  zone_two_milli: number;
  /** Time in Zone 3 (hard activity, 70-80% max HR) in milliseconds */
  zone_three_milli: number;
  /** Time in Zone 4 (very hard activity, 80-90% max HR) in milliseconds */
  zone_four_milli: number;
  /** Time in Zone 5 (maximum effort, 90%+ max HR) in milliseconds */
  zone_five_milli: number;
}

/**
 * Comprehensive workout scoring and performance metrics
 * Contains all measurement data from a scored workout activity
 */
export interface WorkoutScore {
  /** Strain score (0-21 scale) representing workout intensity and cardiovascular load */
  strain: number;
  /** Average heart rate during the workout in beats per minute */
  average_heart_rate: number;
  /** Maximum heart rate reached during the workout in beats per minute */
  max_heart_rate: number;
  /** Energy expenditure during the workout in kilojoules */
  kilojoule: number;
  /** Percentage of workout time with valid heart rate data (0-100%) */
  percent_recorded: number;
  /** Total distance covered in meters (GPS/accelerometer based) */
  distance_meter: number;
  /** Total altitude climbed in meters (upward movement only, does not account for downward travel) */
  altitude_gain_meter: number;
  /** Net altitude change from start to end in meters (can be negative) */
  altitude_change_meter: number;
  /** Time spent in each heart rate zone during the workout */
  zone_durations: ZoneDurations;
}

/**
 * A WHOOP workout activity with comprehensive performance metrics (v2 API)
 * Represents any tracked physical activity or exercise session
 */
export interface Workout {
  /** Unique identifier for the workout activity (UUID format in v2) */
  id: string;
  /** Previous generation identifier for the activity (will not exist past 09/01/2025) */
  v1_id?: number;
  /** ID of the WHOOP user who performed this workout */
  user_id: number;
  /** ISO 8601 timestamp when the workout was recorded in WHOOP's system */
  created_at: string;
  /** ISO 8601 timestamp when the workout data was last updated */
  updated_at: string;
  /** ISO 8601 timestamp when the workout began */
  start: string;
  /** ISO 8601 timestamp when the workout ended */
  end: string;
  /** Timezone offset in format '+hh:mm', '-hh:mm', or 'Z' when workout was recorded */
  timezone_offset: string;
  /** Name of the WHOOP Sport performed during the workout (e.g., "running", "cycling") */
  sport_name: string;
  /** Numeric ID of the sport/activity type (legacy field, will be deprecated 09/01/2025) */
  sport_id?: number;
  /** Scoring state: 'SCORED', 'PENDING_SCORE', or 'UNSCORABLE' */
  score_state: string;
  /** Detailed workout metrics and performance data, only present when score_state is 'SCORED' */
  score?: WorkoutScore;
}

/**
 * Paginated collection of workout activities with pagination support
 */
export interface WorkoutCollection {
  /** Array of workout records in this page */
  records: Workout[];
  /** Token for accessing the next page of records, absent if no more pages */
  next_token?: string;
}
