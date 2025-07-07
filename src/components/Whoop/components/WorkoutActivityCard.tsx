import { WhoopOverview } from "hooks/useWhoop";
import { intervalToDuration } from "date-fns";
import { WorkoutMetric, ZoneChart, ZoneLegend } from "./";
import { SportMap } from "../const";
import { ClockIcon, HeartIcon, BoltIcon, FireIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { WhoopColor, WorkoutMetricColor } from "../types";

const formatDuration = (start: string, end: string): string => {
  const duration = intervalToDuration({
    start: new Date(start),
    end: new Date(end),
  });

  const { hours = 0, minutes = 0, seconds = 0 } = duration;

  return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
};

export const WorkoutActivityCard: React.FC<{
  workouts: WhoopOverview['workout'] | undefined
}> = ({ workouts }) => {
  const [showZoneLegend, setShowZoneLegend] = useState(false);

  if (workouts?.length === 0) return null;

  const sortedWorkouts = workouts?.sort((a, b) =>
    new Date(b.start).getTime() - new Date(a.start).getTime()
  ) ?? [];

  return (
    <div className="rounded-lg bg-white shadow-xs ring-1 ring-gray-900/5 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase">
          Today's Activities
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

      <div className="space-y-4 sm:space-y-6">
        {sortedWorkouts.map((workout) => {
          const strainColor = WhoopColor.Strain;
          const duration = formatDuration(workout.start, workout.end);
          const activityName = SportMap[workout.sport_id] || "Activity";

          const caloriesBurned = Math.round(workout.score.kilojoule / 4.184);

          return (
            <div key={workout.id} className="relative">
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4 mb-4 sm:justify-between">
                      <div className="flex flex-col" style={{ color: strainColor }}>
                        <span className="text-3xl font-bold">{workout.score.strain.toFixed(1)}</span>
                        <span className="text-sm sm:text-base font-medium uppercase">{activityName}</span>
                      </div>
                      <section className="grid grid-cols-2 sm:flex gap-2 sm:gap-6">
                        <WorkoutMetric
                          icon={ClockIcon}
                          color={WorkoutMetricColor.Duration}
                          value={duration}
                        />
                        <WorkoutMetric
                          icon={HeartIcon}
                          value={workout.score.average_heart_rate}
                          color={WorkoutMetricColor.HeartRate}
                          label="Avg HR"
                        />
                        <WorkoutMetric
                          icon={BoltIcon}
                          value={workout.score.max_heart_rate}
                          color={WorkoutMetricColor.MaxHeartRate}
                          label="Max HR"
                        />
                        <WorkoutMetric
                          icon={FireIcon}
                          value={caloriesBurned}
                          color={WorkoutMetricColor.Calories}
                          label="Calories"
                        />
                      </section>
                    </div>

                    <div className="space-y-3">
                      <ZoneChart zoneDurations={workout.score.zone_duration} />
                      {showZoneLegend && <ZoneLegend zoneDurations={workout.score.zone_duration} />}
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
