export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="px-6">
      <div className="overflow-hidden rounded-full bg-gray-200">
        <div className="h-2 rounded-full bg-indigo-600" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
