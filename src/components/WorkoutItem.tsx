import { Exercises } from './Exercises'
import { Score } from './Score'
import { useAuth } from '../hooks/useAuth'
import { WorkoutItemFragment } from '../generated/graphql'
import marked from '../../markedConfig'
import { useCallback, useMemo, useState } from 'react'

const Header = ({ header }: { header: string | null | undefined }) =>
  header && (
    <h2 className="w-full text-xl text-gray-900 font-bold tracking-tight">{header}</h2>
  )

const Title = ({ title }: { title: string | null | undefined }) =>
  title && (
    <h4
      className="mb-2 w-full flex-none text-lg text-gray-900 font-light"
      dangerouslySetInnerHTML={{ __html: marked(title) }}
    />
  )

const Notes = ({ notes }: { notes: string | null | undefined }) =>
  notes && (
    <section
      className="prose text-base text-gray-600 font-light"
      dangerouslySetInnerHTML={{ __html: marked(notes) }}
    />
  )

export const WorkoutItem: React.FC<{ item: WorkoutItemFragment }> = ({ item }) => {
  const { user } = useAuth()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const excludedHeaders = ['Coach Note', 'Short on Time', 'Warm-up', 'Cool Down', 'Recover']
  const needsScore = !excludedHeaders.some((header) => item.header?.toLowerCase().includes(header.toLowerCase()))

  const handleCollapse = useCallback(() => {
    const canCollapse = item.exercise_details.length > 0

    if (!canCollapse || item.header === 'Recover') {
      return
    }

    setIsCollapsed(prev => !prev)
  }, [item.exercise_details])

  if (user?.is_guest) {
    return (
      <article className="py-6 flex flex-wrap w-full">
        <Header header={item.header} />
        <Title title={item.title} />
        <Exercises details={item.exercise_details} />
        <Notes notes={item.notes} />
      </article>
    )
  }

  return (
    <article className="py-6 flex flex-wrap w-full">
      <div className="w-full flex flex-start justify-between mb-1" onClick={handleCollapse}>
        <div className='block'>
          <Header header={item.header} />
          <Title title={item.title} />
        </div>
      </div>

      {!isCollapsed && (
        <>
          <Exercises details={item.exercise_details} />
          <Notes notes={item.notes} />
          <Score
            workoutItemId={item.id}
            values={item.scores}
            showInput={needsScore}
          />
        </>
      )}
    </article>
  )
}
