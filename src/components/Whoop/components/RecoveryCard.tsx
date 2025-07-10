import { useWhoop } from "hooks/useWhoopContext";
import { RecoveryColor, RecoveryLabel, WhoopColor } from "../types";
import { LineGraph } from ".";
import { Loading } from "pages/Loading";

const getRecoveryColor = (value: number): string => {
  const thresholds = [
    { threshold: 67, color: RecoveryColor.High },
    { threshold: 34, color: RecoveryColor.Moderate },
    { threshold: 0, color: RecoveryColor.Low },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.color || WhoopColor.Recovery;
};

const getRecoveryLabel = (value: number): string => {
  if (value >= 67) return RecoveryLabel.High;
  if (value >= 34) return RecoveryLabel.Moderate;
  return RecoveryLabel.Low;
};

export const RecoveryCard = () => {
  const { data, loading } = useWhoop();

  if (loading) return <Loading page="dashboard" component="whoop-card" rows={3} />

  if (!data?.recovery) return null;

  const recoveryScore = data.recovery.score.recovery_score;

  const recoveryColor = getRecoveryColor(recoveryScore);
  const recoveryLabel = getRecoveryLabel(recoveryScore);

  const rows: Record<string, string | number>[] = [
    { name: "HRV", value: `${data.recovery.score.hrv_rmssd_milli.toFixed(0)}` },
    { name: "RHR", value: `${data.recovery.score.resting_heart_rate}` },
    { name: "SpO2", value: `${data.recovery.score.spo2_percentage.toFixed(1)}` },
  ];

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Recovery
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{ backgroundColor: `${recoveryColor}20`, color: recoveryColor }}
        >
          {recoveryLabel}
        </span>
      </div>

      <div className="mb-6">
        <LineGraph
          value={recoveryScore}
          maxValue={100}
          color={recoveryColor}
          unit="%"
        />
      </div>

      <dl className="space-y-3">
        {rows.map((item, index) => (
          <div key={index} className="flex justify-between">
            <dt className="text-sm font-medium text-gray-600">{item.name}</dt>
            <dd className="text-sm font-semibold text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}; 
