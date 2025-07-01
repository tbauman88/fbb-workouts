import React from "react";
import { useWhoop, WhoopOverview } from "../../hooks/useWhoop";
import { Skeleton } from "../Skeleton";

const formatMillisecondsToHours = (milliseconds: number): string => {
  const hours = milliseconds / (1000 * 60 * 60);
  const wholeHours = Math.floor(hours);
  const minutes = Math.round((hours - wholeHours) * 60);

  if (wholeHours === 0) {
    return `${minutes}m`;
  }
  if (minutes === 0) {
    return `${wholeHours}h`;
  }
  return `${wholeHours}h ${minutes}m`;
};

const getSleepColor = (value: number): string => {
  const thresholds = [
    { threshold: 85, color: "#16EC06" },
    { threshold: 70, color: "#FFDE00" },
    { threshold: 0, color: "#FF0026" },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.color || "#f87171";
};

const getSleepLabel = (value: number): string => {
  if (value >= 85) return "Excellent";
  if (value >= 70) return "Good";
  if (value >= 50) return "Fair";
  return "Poor";
};

export const SleepCard: React.FC<{
  sleep: WhoopOverview["sleep"]
}> = ({ sleep }) => {
  const sleepScore = sleep.score.sleep_performance_percentage;
  const sleepColor = getSleepColor(sleepScore);
  const sleepLabel = getSleepLabel(sleepScore);

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Sleep Performance
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{
            backgroundColor: `${sleepColor}20`,
            color: sleepColor
          }}
        >
          {sleepLabel}
        </span>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold mb-1" style={{ color: sleepColor }}>
          {sleepScore}%
        </div>
      </div>

      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Time in Bed</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {formatMillisecondsToHours(sleep.score.stage_summary.total_in_bed_time_milli)}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Respiratory Rate</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {sleep.score.respiratory_rate.toFixed(1)}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Sleep Efficiency</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {sleep.score.sleep_efficiency_percentage.toFixed(1)}%
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Sleep Consistency</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {sleep.score.sleep_consistency_percentage.toFixed(1)}%
          </dd>
        </div>
      </dl>
    </div>
  );
}; 
