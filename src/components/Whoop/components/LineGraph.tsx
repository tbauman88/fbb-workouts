import React from 'react';

interface LineGraphProps {
  value: number;
  maxValue: number;
  color: string;
  height?: number;
  showValue?: boolean;
  unit?: string;
  label?: string | React.ReactNode;
  children?: React.ReactNode;
}

export const LineGraph: React.FC<LineGraphProps> = ({
  value,
  maxValue,
  color,
  height = 6,
  showValue = true,
  unit = "",
  label,
  children,
}) => {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="w-full">
      {showValue && (
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-bold" style={{ color }}>
            {typeof value === 'number' ? value.toFixed(value % 1 === 0 ? 0 : 1) : value}
            {unit}
          </div>
          {typeof label === 'string' && (
            <div className="text-sm text-gray-500 uppercase font-medium">
              {label}
            </div>
          )}
          {typeof label !== 'string' && (
            <div className="text-sm text-gray-500 uppercase font-medium">
              {label}
            </div>
          )}
        </div>
      )}

      {children ? children : (
        <div
          className="w-full bg-gray-200 rounded-full overflow-hidden"
          style={{ height: `${height}px` }}
        >
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          />
        </div>
      )}
    </div>
  );
}; 
