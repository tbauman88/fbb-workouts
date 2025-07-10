export const WorkoutMetric = ({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: React.ComponentType<{ className?: string, style?: React.CSSProperties }>;
  value: string | number;
  label?: string;
  color?: string;
}) => (
  <div className="flex gap-1 sm:gap-2">
    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 text-gray-600`} style={{ color: color }} />
    <span className="text-xs sm:text-sm font-semibold text-gray-600">{value} {label}</span>
  </div>
);
