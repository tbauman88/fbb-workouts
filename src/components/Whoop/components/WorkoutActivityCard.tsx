import { BoltIcon, ClockIcon, FireIcon, HeartIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { format, intervalToDuration } from "date-fns";
import { useWhoop } from "hooks/useWhoopContext";
import { Loading } from "pages/Loading";
import { ComponentType, useState } from "react";
import { WorkoutMetric, ZoneChart, ZoneLegend } from ".";
import { CALORIES_PER_KJ, SportMap } from "../const";
import { WhoopColor, WorkoutMetricColor } from "../types";

const formatDuration = (start: string, end: string): string => {
  const duration = intervalToDuration({
    start: new Date(start),
    end: new Date(end),
  });

  const { hours = 0, minutes = 0, seconds = 0 } = duration;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export const WorkoutActivityCard = () => {
  const { data, loading } = useWhoop();

  const [showZoneLegend, setShowZoneLegend] = useState(false);

  if (loading) return <Loading page="dashboard" component="workout-activity-card" rows={2} />

  if (data?.workouts?.length === 0) return null;

  const sortedWorkouts = data?.workouts
    .sort((a, b) =>
      new Date(b.start).getTime() - new Date(a.start).getTime()
    ) ?? [];

  if (sortedWorkouts.length === 0) return null;

  return (
    <div className="rounded-lg bg-white shadow-xs ring-1 ring-gray-900/5 p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Recent Activities
        </h3>
        <button
          onClick={() => setShowZoneLegend(prev => !prev)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
          title={showZoneLegend ? "Hide zone legend" : "Show zone legend"}
        >
          <InformationCircleIcon
            className={`h-5 w-5 transition-colors duration-200 ${showZoneLegend ? 'text-blue-600' : 'text-gray-400'
              }`}
          />
        </button>
      </div>

      <div className="space-y-4 md:space-y-6">
        {sortedWorkouts.map((workout) => {
          if (!workout.score) return null;

          const duration = formatDuration(workout.start, workout.end);
          const activityName = SportMap[workout.sport_id ?? 0] || "Activity";
          const caloriesBurned = Math.round(workout.score.kilojoule / CALORIES_PER_KJ);

          const rows: Record<string, {
            icon: ComponentType;
            value: string | number;
            color: string;
            label: string;
          }> = {
            'Duration': {
              icon: ClockIcon,
              value: duration,
              color: WorkoutMetricColor.Duration,
              label: 'Duration',
            },
            'Avg HR': {
              icon: HeartIcon,
              value: workout.score.average_heart_rate,
              color: WorkoutMetricColor.HeartRate,
              label: 'Avg HR',
            },
            'Max HR': {
              icon: BoltIcon,
              value: workout.score.max_heart_rate,
              color: WorkoutMetricColor.MaxHeartRate,
              label: 'Max HR',
            },
            'Calories': {
              icon: FireIcon,
              value: caloriesBurned,
              color: WorkoutMetricColor.Calories,
              label: 'Calories',
            },
          };

          return (
            <div key={workout.id} className="relative">
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="w-full">
                    <section className="flex flex-col md:flex-row md:items-end gap-3 md:gap-4 mb-4 md:justify-between">
                      <section className="flex flex-col">
                        <span className="text-3xl font-bold" style={{ color: WhoopColor.Strain }}>{workout.score.strain.toFixed(1)}</span>
                        <span className="text-sm md:text-base font-medium uppercase" style={{ color: WhoopColor.Strain }}>{activityName}</span>
                        <span className="text-sm font-base text-gray-500">
                          {format(new Date(workout.start), 'EEE MMM. do • HH:mm')}
                        </span>
                      </section>
                      <section className="grid grid-cols-2 md:flex gap-2 md:gap-6">
                        {Object.entries(rows).map(([key, value]) => (
                          <WorkoutMetric
                            key={key}
                            icon={value.icon}
                            value={value.value}
                            color={value.color}
                            label={value.label}
                          />
                        ))}
                      </section>
                    </section>

                    <div className="space-y-3">
                      <ZoneChart zoneDurations={workout.score.zone_durations} />
                      {showZoneLegend && <ZoneLegend zoneDurations={workout.score.zone_durations} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 
