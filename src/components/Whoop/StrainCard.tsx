import { WhoopOverview } from "hooks/useWhoop";
import { differenceInSeconds, isSameDay } from "date-fns";

enum StrainLabel {
  AllOut = "All Out",
  High = "High",
  Moderate = "Moderate",
  Light = "Light",
}

enum StrainColor {
  AllOut = "#FF0026",
  High = "#FF7F00",
  Moderate = "#FFDE00",
  Light = "#0093E7",
}

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
    { threshold: 18, label: StrainLabel.AllOut },
    { threshold: 14, label: StrainLabel.High },
    { threshold: 10, label: StrainLabel.Moderate },
    { threshold: 0, label: StrainLabel.Light },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.label || StrainLabel.Light;
};

const getStrainColor = (value: number): string => {
  const thresholds = [
    { threshold: 18, color: StrainColor.AllOut },
    { threshold: 14, color: StrainColor.High },
    { threshold: 10, color: StrainColor.Moderate },
    { threshold: 0, color: StrainColor.Light },
  ];

  return thresholds.find(({ threshold }) => value >= threshold)?.color || StrainColor.Light;
};

export const StrainCard: React.FC<{
  cycle: WhoopOverview['cycle']
  workout: WhoopOverview['workout']
}> = ({ cycle, workout: workout }) => {
  const isToday = isSameDay(new Date(workout.created_at), new Date());

  const dailyStrain = isToday
    ? {
      type: "Workout",
      score: workout.score.strain,
      average_heart_rate: workout.score.average_heart_rate,
      max_heart_rate: workout.score.max_heart_rate,
      duration: formatDuration(workout.start, workout.end),
    }
    : {
      type: "Cycle",
      score: cycle.score.strain,
      average_heart_rate: cycle.score.average_heart_rate,
      max_heart_rate: cycle.score.max_heart_rate,
      duration: "00:00:00",
    };

  const strainColor = getStrainColor(dailyStrain.score);
  const strainLabel = getStrainLabel(dailyStrain.score);

  const data: Record<string, string | boolean>[] = [
    { name: "Avg HR", value: `${dailyStrain.average_heart_rate} bpm`, show: true },
    { name: "Max HR", value: `${dailyStrain.max_heart_rate} bpm`, show: true },
    { name: "Duration", value: `${dailyStrain.duration}`, show: dailyStrain.type === 'Workout' },
  ];

  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Strain ({dailyStrain.type})
        </h3>
        <span
          className="text-xs font-medium px-2 py-1 rounded"
          style={{ backgroundColor: `${strainColor}20`, color: strainColor }}
        >
          {strainLabel}
        </span>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold mb-1" style={{ color: strainColor }}>
          {dailyStrain.score.toFixed(1)}
        </div>
      </div>

      <dl className="space-y-3">
        {data.map((item) => {
          if (!item.show) return null;

          return (
            <div className="flex justify-between">
              <dt className="text-sm font-medium text-gray-600">{item.name}</dt>
              <dd className="text-sm font-semibold text-gray-900">
                {item.value}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}; 
