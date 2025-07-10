import { useCallback, useState } from 'react'
import { WorkoutItemFragment } from 'generated/graphql'
import marked from '../../markedConfig'
import { Exercises } from './Exercises'
import { Score } from './Score'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const Header = ({ header }: { header: string | null | undefined }) =>
  header && (
    <h2 className="text-xl lg:text-2xl text-gray-900 font-bold tracking-tight leading-tight">
      {header}
    </h2>
  )

const Title = ({ title }: { title: string | null | undefined }) =>
  title && (
    <h4
      className="mt-1 mb-3 text-base lg:text-lg text-gray-700 font-normal leading-relaxed"
      dangerouslySetInnerHTML={{ __html: marked(title) }}
    />
  )

const Notes = ({ notes }: { notes: string | null | undefined }) =>
  notes && (
    <section
      className="prose prose-sm lg:prose-base text-gray-600 font-normal leading-relaxed max-w-none prose-ul:pl-0 prose-ol:pl-0 prose-li:pl-0 prose-p:pl-0 prose-p:mb-3 prose-p:text-gray-700 prose-em:text-gray-600 prose-em:italic prose-em:font-bold"
      dangerouslySetInnerHTML={{ __html: marked(notes) }}
    />
  )

export const WorkoutItem: React.FC<{ item: WorkoutItemFragment }> = ({ item }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const excludedHeaders = ['Coach Note', 'Short on Time', 'Warm-up', 'Cool Down', 'Recover']
  const needsScore = !excludedHeaders.some((header) => item.header?.toLowerCase().includes(header.toLowerCase()))
  const canCollapse = item.exercise_details.length > 0 && item.header !== 'Recover'

  const handleCollapse = useCallback(() => {
    if (!canCollapse) return
    setIsCollapsed(prev => !prev)
  }, [canCollapse])

  return (
    <article className="py-6 lg:py-8 transition-all duration-300 mb-0">

      {/* Header Section with Collapse Toggle */}
      <div
        className={`flex items-start justify-between gap-4 mb-4 ${canCollapse ? 'cursor-pointer group' : ''
          }`}
        onClick={handleCollapse}
        role={canCollapse ? 'button' : undefined}
        tabIndex={canCollapse ? 0 : undefined}
        onKeyDown={(e) => {
          if (canCollapse && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            handleCollapse()
          }
        }}
        aria-expanded={canCollapse ? !isCollapsed : undefined}
        aria-label={canCollapse ? `${isCollapsed ? 'Expand' : 'Collapse'} ${item.header}` : undefined}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Header header={item.header} />
          </div>
          <Title title={item.title} />
        </div>

        {canCollapse && (
          <div className="flex-shrink-0 mt-1">
            <div className="p-2 rounded-full transition-all duration-200 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-gray-200">
              {isCollapsed ? (
                <ChevronDownIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
              ) : (
                <ChevronUpIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Collapsible Content */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[2000px] opacity-100'
        }`}>
        <div className="space-y-6">
          {item.exercise_details.length > 0 && (
            <div>
              <Exercises details={item.exercise_details} />
            </div>
          )}

          {item.notes && (
            <div>
              <Notes notes={item.notes} />
            </div>
          )}

          <Score
            workoutItemId={item.id}
            values={item.scores}
            showInput={needsScore}
            onCompleted={(completed: boolean) => setIsCompleted(completed)}
          />
        </div>
      </div>
    </article>
  )
}
