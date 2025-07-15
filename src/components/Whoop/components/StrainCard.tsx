import { useWhoop } from "hooks/useWhoopContext";
import { Loading } from "pages/Loading";
import { LineGraph } from ".";
import { CALORIES_PER_KJ } from "../const";
import { StrainLabel, WhoopColor } from "../types";

const getStrainLabel = (value: number): string => {
  const thresholds = [
    { threshold: 18, label: StrainLabel.AllOut },
    { threshold: 14, label: StrainLabel.High },
    { threshold: 10, label: StrainLabel.Moderate },
    { threshold: 0, label: StrainLabel.Light },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.label || StrainLabel.Light;
};

function estimateStrainTarget(recovery: number, sleep: number): { min: number; max: number } {
  if (recovery >= 80 && sleep >= 85) return { min: 14.0, max: 18.0 };
  if (recovery >= 60 && sleep >= 75) return { min: 10.0, max: 14.0 };
  if (recovery >= 40 && sleep >= 65) return { min: 7.0, max: 10.0 };
  return { min: 4.0, max: 7.0 };
}

export const StrainCard = () => {
  const { data, loading } = useWhoop();

  if (loading) return <Loading page="dashboard" component="whoop-card" rows={4} />

  if (!data?.cycle) return null;

  const strainColor = WhoopColor.Strain;
  const strainLabel = getStrainLabel(data.cycle.score.strain);

  const strainTarget = estimateStrainTarget(data.recovery.score.recovery_score, data.sleep.score.sleep_efficiency_percentage);

  const rows: Record<string, string> = {
    Target: `${strainTarget.min}-${strainTarget.max}`,
    'Avg HR': `${data.cycle.score.average_heart_rate} bpm`,
    'Max HR': `${data.cycle.score.max_heart_rate} bpm`,
    'Calories': `${Math.round(data.cycle.score.kilojoule / CALORIES_PER_KJ)} kcal`,
  };

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Strain
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{ backgroundColor: `${strainColor}20`, color: strainColor }}
        >
          {strainLabel}
        </span>
      </div>

      <div className="mb-6">
        <LineGraph
          value={data.cycle.score.strain}
          maxValue={21}
          targetRange={strainTarget}
          color={strainColor}
        />
      </div>

      <dl className="space-y-3">
        {Object.entries(rows).map(([key, value]) => (
          <div className="flex justify-between" key={key}>
            <dt className="text-sm font-medium text-gray-600">{key}</dt>
            <dd className="text-sm font-semibold text-gray-900">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}; 
