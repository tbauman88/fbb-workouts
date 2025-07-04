import React from "react";
import { useWhoop } from "../../hooks/useWhoop";
import { differenceInSeconds, isSameDay } from "date-fns";


const formatSecondsToHMS = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const remainder = totalSeconds % 3600;
  const minutes = Math.floor(remainder / 60);
  const seconds = remainder % 60;

  return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

const formatDuration = (start: string, end: string): string => {
  const duration = differenceInSeconds(new Date(end), new Date(start));
  return formatSecondsToHMS(duration);
}

const getLabel = (value: number): string => {
  const thresholds = [
    { threshold: 18, label: "All Out" },
    { threshold: 14, label: "High" },
    { threshold: 10, label: "Moderate" },
    { threshold: 0, label: "Light" },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.label || "Light";
};

const getRecoveryColor = (value: number): string => {
  const thresholds = [
    { threshold: 67, color: "#16EC06" },
    { threshold: 34, color: "#FFDE00" },
    { threshold: 0, color: "#FF0026" },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.color || "#f87171";
};

export const DailyOverview: React.FC<{ size?: number }> = ({ size = 200 }) => {
  const { stats } = useWhoop();

  if (!stats) return null;

  // const workoutScore = stats.workout.score.strain;

  const cycle = {
    score: stats.cycle.score.strain,
    average_heart_rate: stats.cycle.score.average_heart_rate,
    max_heart_rate: stats.cycle.score.max_heart_rate,
  }

  const workout = {
    score: stats.workout.score.strain,
    average_heart_rate: stats.workout.score.average_heart_rate,
    max_heart_rate: stats.workout.score.max_heart_rate,
    duration: formatDuration(stats.workout.start, stats.workout.end),
    // intensity: stats.workout.score.intensity,
  }

  const recovery = {
    score: stats.recovery.score.recovery_score,
    hrv: stats.recovery.score.hrv_rmssd_milli,
    resting_heart_rate: stats.recovery.score.resting_heart_rate,
    spo2_percentage: stats.recovery.score.spo2_percentage,
  }

  const sleep = {
    score: stats.sleep.score.sleep_performance_percentage,
    hours: stats.sleep.score.stage_summary.total_in_bed_time_milli,
    needed: stats.sleep.score.sleep_needed.need_from_sleep_debt_milli,
  }

  const dailyStrain = {
    type: isSameDay(new Date(stats.workout.created_at), new Date()) ? 'Workout' : 'Cycle',
    score: isSameDay(new Date(stats.workout.created_at), new Date()) ? workout.score : cycle.score,
    average_heart_rate: isSameDay(new Date(stats.workout.created_at), new Date()) ? workout.average_heart_rate : cycle.average_heart_rate,
    max_heart_rate: isSameDay(new Date(stats.workout.created_at), new Date()) ? workout.max_heart_rate : cycle.max_heart_rate,
    duration: isSameDay(new Date(stats.workout.created_at), new Date()) ? workout.duration : '00:00:00',
  }

  const data: Record<string, string | number>[] = [
    { name: "HRV", value: `${recovery.hrv.toFixed(0)}` },
    { name: "RHR", value: `${recovery.resting_heart_rate}` },
    { name: "Respiratory Rate", value: `${recovery.spo2_percentage.toFixed(1)}` },
    { name: `Avg HR (${dailyStrain.type})`, value: `${dailyStrain.average_heart_rate} bpm` },
    { name: `Max HR (${dailyStrain.type})`, value: `${dailyStrain.max_heart_rate} bpm` },
    { name: "Workout Duration", value: `${dailyStrain.duration}` },
  ];

  const workoutColor = "#0093E7";
  const recoveryColor = getRecoveryColor(recovery.score);

  const strainPercentage = Math.min((dailyStrain.score / 21) * 100, 100).toFixed(2);
  const recoveryPercentage = Math.min((recovery.score / 100) * 100, 100).toFixed(2);

  return (
    <>
      <div className="bg-neutral-900 text-white p-6">
        <section className="w-full flex-center">
          <div className="flex-center space-x-10">
            <div className="flex flex-col space-y-2 text-right">
              <div style={{ color: recoveryColor }}>
                <span className="font-bold text-lg">{recovery.score}%</span>
                <p className="uppercase text-sm">Recovery</p>
              </div>
              <div className="text-white">
                <span className="font-bold text-lg">{recovery.hrv.toFixed(0)}</span>
                <p className="uppercase text-sm text-neutral-300">HRV</p>
              </div>
            </div>

            <div className="relative" style={{ width: size, height: size }}>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(${workoutColor} 0% ${strainPercentage}%, #374151 ${strainPercentage}% 100%)`,
                }}
              />
              <div className="absolute inset-2 rounded-full bg-neutral-900" />
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  background: `conic-gradient(${recoveryColor} 0% ${recoveryPercentage}%, #374151 ${recoveryPercentage}% 100%)`,
                }}
              />
              <div className="absolute inset-6 bg-neutral-900 rounded-full flex-center flex-col">
                <div className="text-sm text-neutral-400">{getLabel(dailyStrain.score)}</div>
                <div className="text-3xl font-bold">{dailyStrain.score.toFixed(1)}</div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="text-blue-400" style={{ color: workoutColor }}>
                <span className="font-bold text-lg">{dailyStrain.score.toFixed(1)}</span>
                <p className="uppercase text-sm">Strain</p>
              </div>

              <div className="text-white">
                <span className="font-bold text-lg">{sleep.score}%</span>
                <p className="uppercase text-sm text-neutral-300">Sleep</p>
                <p className="uppercase text-sm text-neutral-300">Performance</p>
              </div>
            </div>
          </div>
        </section>

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {data.map((item) => (
            <div key={item.name} className="glass-dark overflow-hidden rounded-lg px-4 py-5 shadow-soft sm:p-6">
              <dt className="truncate text-sm font-medium text-white uppercase">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div >
      {/* 
      <section className="p-6">
        {stats && (
          <pre>
            <code>
              {JSON.stringify(stats, null, 2)}
            </code>
          </pre>
        )}
      </section> */}
    </>
  );
};
