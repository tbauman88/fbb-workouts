import { WhoopOverview } from "hooks/useWhoop";

enum SleepLabel {
  Excellent = "Excellent",
  Good = "Good",
  Fair = "Fair",
  Poor = "Poor",
}

enum SleepColor {
  Excellent = "#16EC06",
  Good = "#FFDE00",
  Fair = "#FF0026",
  Default = "#f87171",
}

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
    { threshold: 85, color: SleepColor.Excellent },
    { threshold: 70, color: SleepColor.Good },
    { threshold: 0, color: SleepColor.Fair },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.color || SleepColor.Default;
};

const getSleepLabel = (value: number): string => {
  if (value >= 85) return SleepLabel.Excellent;
  if (value >= 70) return SleepLabel.Good;
  if (value >= 50) return SleepLabel.Fair;
  return SleepLabel.Poor;
};

export const SleepCard: React.FC<{
  sleep: WhoopOverview["sleep"]
}> = ({ sleep }) => {
  const sleepScore = sleep.score.sleep_performance_percentage;
  const sleepColor = getSleepColor(sleepScore);
  const sleepLabel = getSleepLabel(sleepScore);

  const data: Record<string, string | number>[] = [
    { name: "Time in Bed", value: `${formatMillisecondsToHours(sleep.score.stage_summary.total_in_bed_time_milli)}` },
    { name: "Respiratory Rate", value: `${sleep.score.respiratory_rate.toFixed(1)}` },
    { name: "Sleep Efficiency", value: `${sleep.score.sleep_efficiency_percentage.toFixed(1)}%` },
    { name: "Sleep Consistency", value: `${sleep.score.sleep_consistency_percentage.toFixed(1)}%` },
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
        <div className="text-4xl font-bold mb-1" style={{ color: sleepColor }}>
          {sleepScore}%
        </div>
      </div>

      <dl className="space-y-3">
        {data.map((item) => (
          <div className="flex justify-between">
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
