import React from 'react';
import { formatMillisecondsToTime, ZONE_DATA } from '../const';
import { ZoneDurations } from '../types';

export const ZoneChart: React.FC<{
  zoneDurations: ZoneDurations
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
    <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden my-6">
      {zoneData.map((item, index) => {
        const percentage = (item.duration / totalTime) * 100;
        const color = ZONE_DATA[item.zone].color;

        return (
          <div
            key={item.zone}
            className="absolute top-0 h-full transition-all duration-300"
            style={{
              backgroundColor: color,
              left: zoneData.slice(0, index).reduce((acc, prev) => acc + (prev.duration / totalTime) * 100, 0) + '%',
              width: percentage + '%',
            }}
            title={`${ZONE_DATA[item.zone].label}: ${formatMillisecondsToTime(item.duration)} (${percentage.toFixed(0)}%)`}
          />
        );
      })}
    </div>
  );
}; 
