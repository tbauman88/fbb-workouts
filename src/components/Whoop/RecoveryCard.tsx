import React from "react";
import { WhoopOverview } from "../../hooks/useWhoop";

enum RecoveryLabel {
  High = "High",
  Moderate = "Moderate",
  Low = "Low",
}

enum RecoveryColor {
  High = "#16EC06",
  Moderate = "#FFDE00",
  Low = "#FF0026",
  Default = "#f87171",
}

const getRecoveryColor = (value: number): string => {
  const thresholds = [
    { threshold: 67, color: RecoveryColor.High },
    { threshold: 34, color: RecoveryColor.Moderate },
    { threshold: 0, color: RecoveryColor.Low },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.color || RecoveryColor.Default;
};

const getRecoveryLabel = (value: number): string => {
  if (value >= 67) return RecoveryLabel.High;
  if (value >= 34) return RecoveryLabel.Moderate;
  return RecoveryLabel.Low;
};

export const RecoveryCard: React.FC<{
  recovery: WhoopOverview["recovery"]
}> = ({ recovery }) => {
  const data = {
    score: recovery.score.recovery_score,
    hrv: recovery.score.hrv_rmssd_milli,
    resting_heart_rate: recovery.score.resting_heart_rate,
    spo2_percentage: recovery.score.spo2_percentage,
  };

  const recoveryColor = getRecoveryColor(data.score);
  const recoveryLabel = getRecoveryLabel(data.score);

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Recovery
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{
            backgroundColor: `${recoveryColor}20`,
            color: recoveryColor
          }}
        >
          {recoveryLabel}
        </span>
      </div>

      <div className="mb-6">
        <div
          className="text-4xl font-bold mb-1"
          style={{ color: recoveryColor }}
        >
          {data.score}%
        </div>
      </div>

      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">HRV</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {data.hrv.toFixed(0)} ms
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Resting HR</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {data.resting_heart_rate} bpm
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">SpO2</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {data.spo2_percentage.toFixed(1)}%
          </dd>
        </div>
      </dl>
    </div>
  );
}; 
