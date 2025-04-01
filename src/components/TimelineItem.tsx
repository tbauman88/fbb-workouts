import { marked } from 'marked'

type TimelineItemProps = {
  item: {
    id: string
    header?: string | null | undefined
    notes?: string | null | undefined
    title?: string | null | undefined
  }
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  if (item.header === '') return null

  const title = item.header || item.title

  return (
    <li className="relative flex gap-x-8">
      <div className="relative flex-none mt-1">
        <div className="h-2 w-2 rounded-full bg-gray-200 ring-1 ring-gray-400" />
        {item.notes && (
          <div className="absolute left-1 top-3 w-[1px] bg-gray-400" style={{ height: 'calc(100% - 12px)' }} />
        )}
      </div>

      <div className="flex-1 space-y-3">
        {title && (
          <div className="flex items-baseline gap-x-3">
            <div
              className={`min-w-[120px] text-sm font-semibold uppercase ${item.title ? 'text-gray-500' : 'text-gray-900'}`}
              dangerouslySetInnerHTML={{ __html: marked(title) }}
            />
          </div>
        )}

        {item.notes && (
          <div className="text-sm text-gray-600">
            <div className="[&>p]:mb-4 last:[&>p]:mb-0" dangerouslySetInnerHTML={{ __html: marked(item.notes) }} />
          </div>
        )}
      </div>
    </li>
  )
} 
