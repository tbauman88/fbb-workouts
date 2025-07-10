import { useWhoop } from "hooks/useWhoopContext";
import { LineGraph } from ".";
import { SleepLabel, WhoopColor } from "../types";
import { Loading } from "pages/Loading";

const formatMillisecondsToHours = (milliseconds: number): string => {
  const hours = milliseconds / (1000 * 60 * 60);
  const wholeHours = Math.floor(hours);
  const minutes = Math.round((hours - wholeHours) * 60);

  if (wholeHours === 0) return `${minutes}m`;
  if (minutes === 0) return `${wholeHours}h`;

  return `${wholeHours}h ${minutes}m`;
};

const getSleepLabel = (value: number): string => {
  if (value >= 85) return SleepLabel.Excellent;
  if (value >= 70) return SleepLabel.Good;
  if (value >= 50) return SleepLabel.Fair;
  return SleepLabel.Poor;
};

export const SleepCard = () => {
  const { data, loading } = useWhoop();

  if (loading) return <Loading page="dashboard" component="whoop-card" rows={4} />

  if (!data?.sleep) return null;

  const sleepScore = data.sleep.score.sleep_performance_percentage;
  const sleepColor = WhoopColor.Sleep;
  const sleepLabel = getSleepLabel(sleepScore);

  const totalSleepTime = data.sleep.score.stage_summary.total_in_bed_time_milli - data.sleep.score.stage_summary.total_awake_time_milli;

  const rows: Record<string, string | number>[] = [
    { name: "Hours of Sleep", value: `${formatMillisecondsToHours(totalSleepTime)}` },
    { name: "Respiratory Rate", value: `${data.sleep.score.respiratory_rate.toFixed(1)}` },
    { name: "Sleep Efficiency", value: `${data.sleep.score.sleep_efficiency_percentage.toFixed(1)}%` },
    { name: "Sleep Consistency", value: `${data.sleep.score.sleep_consistency_percentage.toFixed(1)}%` },
  ];

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Sleep Performance
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{ backgroundColor: `${sleepColor}20`, color: sleepColor }}
        >
          {sleepLabel}
        </span>
      </div>

      <div className="mb-6">
        <LineGraph
          value={sleepScore}
          maxValue={100}
          color={sleepColor}
          unit="%"
        />
      </div>

      <dl className="space-y-3 text-sm">
        {rows.map((item, index) => (
          <div key={index} className="flex justify-between">
            <dt className="font-medium text-gray-600">{item.name}</dt>
            <dd className="font-semibold text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}; 
