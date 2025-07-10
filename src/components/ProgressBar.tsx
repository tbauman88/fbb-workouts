export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="overflow-hidden rounded-full bg-neutral-200">
      <div className="h-2 rounded-full gradient-primary" style={{ width: `${progress}%` }} />
    </div>
  )
}
