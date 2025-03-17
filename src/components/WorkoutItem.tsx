import { marked } from 'marked'
import { Exercises } from './Exercises'
import { Score } from './Score'
import { WorkoutItemProps, WorkoutStatus } from '../types'

const Header = ({ header }: { header: string | null | undefined }) =>
  header && <h2 className="w-full text-xl text-gray-900 font-bold tracking-tight">{header}</h2>

const Title = ({ title }: { title: string | null | undefined }) =>
  title && (
    <h4
      className="mb-4 w-full flex-none text-lg text-gray-900 font-light"
      dangerouslySetInnerHTML={{ __html: marked(title) }}
    />
  )

const Notes = ({ notes }: { notes: string | null | undefined }) =>
  notes && (
    <section
      className="prose mt-4 text-base text-gray-600 font-light"
      dangerouslySetInnerHTML={{ __html: marked(notes) }}
    />
  )

export const WorkoutItem: React.FC<WorkoutItemProps> = ({ item, status }) => {
  const excludedHeaders = ['Coach Note', 'Short on Time', 'Warm-up', 'Cool Down']

  const needsScore = !excludedHeaders.some((header) => item.header?.toLowerCase().includes(header.toLowerCase()))

  return (
    <article className="py-6 flex flex-wrap w-full">
      <Header header={item.header} />
      <Title title={item.title} />
      <Exercises exercise_details={item.exercise_details} />
      <Notes notes={item.notes} />
      <Score
        workoutItemId={item.id}
        values={item.scores}
        showInput={needsScore}
        isCompleted={status !== WorkoutStatus.PENDING}
      />
    </article>
  )
}
