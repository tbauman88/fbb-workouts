export const Skeleton: React.FC<{ width?: string; height?: string; className?: string }> = ({
  width = '100%',
  height = '20px',
  className = ''
}) => {
  return <div className={`bg-gray-200 rounded-sm ${className}`} style={{ width, height }} />
}
