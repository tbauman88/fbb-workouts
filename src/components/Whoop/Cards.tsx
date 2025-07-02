import { useWhoop } from "hooks/useWhoop";
import { DailyOverview } from "./";
import { RecoveryCard } from "./RecoveryCard";
import { SleepCard } from "./SleepCard";
import { StrainCard } from "./StrainCard";

const Skeleton = ({ rows }: { rows: number }) => {
  return (
    <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="space-y-3">
          {Array.from({ length: rows }).map((_, index) => (
            <div key={`row-${index}`} className="h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const WhoopCards = ({ integrationId }: { integrationId?: string }) => {
  const { stats, loading, error, hasTokens } = useWhoop(integrationId);

  if (!integrationId) {
    return null;
  }

  if (loading) {
    return (
      <section className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-8">
        <Skeleton rows={3} />
        <Skeleton rows={2} />
        <Skeleton rows={4} />
      </section>
    );
  }

  if (error || !hasTokens || !stats) {
    return (
      <section className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-8">
        <div className="rounded-lg bg-gray-50 shadow-xs ring-1 ring-gray-900/5 p-6">
          <div className="text-center">
            <div className="text-red-500 text-sm font-medium mb-2">
              ⚠️ Whoop Unavailable
            </div>
            <p className="text-gray-500 text-xs">
              {!hasTokens ? "Connect Whoop account" : "Failed to load data"}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-8">
        <RecoveryCard recovery={stats.recovery} />
        <StrainCard cycle={stats.cycle} workout={stats.workout} />
        <SleepCard sleep={stats.sleep} />
      </section>

      <DailyOverview stats={stats} loading={loading} error={error} hasTokens={hasTokens} />
    </>
  )
}
