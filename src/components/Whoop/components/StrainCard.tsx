import { useWhoop } from "hooks/useWhoopContext";
import { StrainLabel, WhoopColor } from "../types";
import { LineGraph } from ".";
import { Loading } from "pages/Loading";

const getStrainLabel = (value: number): string => {
  const thresholds = [
    { threshold: 18, label: StrainLabel.AllOut },
    { threshold: 14, label: StrainLabel.High },
    { threshold: 10, label: StrainLabel.Moderate },
    { threshold: 0, label: StrainLabel.Light },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.label || StrainLabel.Light;
};

export const StrainCard = () => {
  const { data, loading } = useWhoop();

  if (loading) return <Loading page="dashboard" component="whoop-card" rows={3} />

  if (!data?.cycle) return null;

  const strainColor = WhoopColor.Strain;
  const strainLabel = getStrainLabel(data.cycle.score.strain);

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
          color={strainColor}
        />
      </div>

      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Avg HR</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {data.cycle.score.average_heart_rate} bpm
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm font-medium text-gray-600">Max HR</dt>
          <dd className="text-sm font-semibold text-gray-900">
            {data.cycle.score.max_heart_rate} bpm
          </dd>
        </div>
      </dl>
    </div>
  );
}; 
