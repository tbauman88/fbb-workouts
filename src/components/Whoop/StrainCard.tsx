import React from "react";
import { WhoopOverview } from "../../hooks/useWhoop";
import { differenceInSeconds, isSameDay } from "date-fns";

const formatSecondsToHMS = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const remainder = totalSeconds % 3600;
  const minutes = Math.floor(remainder / 60);
  const seconds = remainder % 60;

  return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const formatDuration = (start: string, end: string): string => {
  const duration = differenceInSeconds(new Date(end), new Date(start));
  return formatSecondsToHMS(duration);
};

const getStrainLabel = (value: number): string => {
  const thresholds = [
    { threshold: 18, label: "All Out" },
    { threshold: 14, label: "High" },
    { threshold: 10, label: "Moderate" },
    { threshold: 0, label: "Light" },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.label || "Light";
};

const getStrainColor = (value: number): string => {
  const thresholds = [
    { threshold: 18, color: "#FF0026" },
    { threshold: 14, color: "#FF7F00" },
    { threshold: 10, color: "#FFDE00" },
    { threshold: 0, color: "#0093E7" },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.color || "#0093E7";
};

export const StrainCard: React.FC<{
  cycleData: WhoopOverview['cycle']
  workoutData: WhoopOverview['workout']
}> = ({ cycleData, workoutData }) => {
  const cycle = {
    score: cycleData.score.strain,
    average_heart_rate: cycleData.score.average_heart_rate,
    max_heart_rate: cycleData.score.max_heart_rate,
  };

  const workout = {
    score: workoutData.score.strain,
    average_heart_rate: workoutData.score.average_heart_rate,
    max_heart_rate: workoutData.score.max_heart_rate,
    duration: formatDuration(workoutData.start, workoutData.end),
  };

  const dailyStrain = {
    type: isSameDay(new Date(workoutData.created_at), new Date()) ? 'Workout' : 'Cycle',
    score: isSameDay(new Date(workoutData.created_at), new Date()) ? workout.score : cycle.score,
    average_heart_rate: isSameDay(new Date(workoutData.created_at), new Date()) ? workout.average_heart_rate : cycle.average_heart_rate,
    max_heart_rate: isSameDay(new Date(workoutData.created_at), new Date()) ? workout.max_heart_rate : cycle.max_heart_rate,
    duration: isSameDay(new Date(workoutData.created_at), new Date()) ? workout.duration : '00:00:00',
  };

  const strainColor = getStrainColor(dailyStrain.score);
  const strainLabel = getStrainLabel(dailyStrain.score);

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Strain ({dailyStrain.type})
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{
            backgroundColor: `${strainColor}20`,
            color: strainColor
          }}
        >
          {strainLabel}
        </span>
      </div>

      <div className="mb-6">
        <div
          className="text-4xl font-bold mb-1"
          style={{ color: strainColor }}
        >
          {dailyStrain.score.toFixed(1)}
        </div>
      </div>

      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Avg HR</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {dailyStrain.average_heart_rate} bpm
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Max HR</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {dailyStrain.max_heart_rate} bpm
          </dd>
        </div>
        {dailyStrain.type === 'Workout' && (
          <div className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">Duration</dt>
            <dd className="text-sm font-semibold text-gray-900">
              {dailyStrain.duration}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}; 
