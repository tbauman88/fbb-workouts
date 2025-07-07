import React from 'react';
import { formatMillisecondsToTime, ZONE_DATA } from '../const';
import { ZoneDuration } from '../types';

export const ZoneLegend: React.FC<{
  zoneDurations: ZoneDuration
}> = ({ zoneDurations }) => {
  const zoneData = [
    { zone: 0, duration: zoneDurations.zone_zero_milli },
    { zone: 1, duration: zoneDurations.zone_one_milli },
    { zone: 2, duration: zoneDurations.zone_two_milli },
    { zone: 3, duration: zoneDurations.zone_three_milli },
    { zone: 4, duration: zoneDurations.zone_four_milli },
    { zone: 5, duration: zoneDurations.zone_five_milli },
  ].filter(item => item.duration > 0);

  const totalTime = zoneData.reduce((sum, item) => sum + item.duration, 0);

  if (totalTime === 0) return null;

  return (
    <div className="space-y-3 text-xs">
      {zoneData.map((item) => {
        const percentage = (item.duration / totalTime) * 100;
        const color = ZONE_DATA[item.zone].color;

        return (
          <div key={item.zone} className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="font-medium text-gray-600">
                {ZONE_DATA[item.zone].label} ({percentage.toFixed(0)}%)
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">{formatMillisecondsToTime(item.duration)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}; 
