import { marked } from 'marked'
import { Exercises } from './Exercises'
import { Score } from './Score'
import { WorkoutItemProps } from '../types'

const Header = ({ header }: { header: string }) => (
  <h2 className="w-full text-xl text-gray-900 font-bold tracking-tight">{header}</h2>
)

const Title = ({ title }: { title: string }) => (
  <h4
    className="mb-4 w-full flex-none text-lg text-gray-900 font-light"
    dangerouslySetInnerHTML={{ __html: marked(title) }}
  />
)

const Notes = ({ notes }: { notes: string }) => (
  <section
    className="prose mt-4 text-base text-gray-600 font-light"
    dangerouslySetInnerHTML={{ __html: marked(notes) }}
  />
)

export const WorkoutItem: React.FC<WorkoutItemProps> = ({
  item: { header, title, exercise_details, notes, score }
}) => (
  <article className="py-6 flex flex-wrap gap-x-3 w-full">
    {header && <Header header={header} />}
    {title && <Title title={title} />}
    <Exercises exercise_details={exercise_details} />
    {notes && <Notes notes={notes} />}
    {score && <Score value={score} />}
  </article>
)
