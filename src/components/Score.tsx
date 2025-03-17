import { useState, useRef, useCallback, useEffect } from 'react'
import { useWorkout } from '../hooks/useWorkout'
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'
import { isToday } from 'date-fns'
import { WorkoutItem } from '../types/component'

const PLACEHOLDER = 'Add score'
const KEY_HINT = 'done'

type Score = WorkoutItem[number]['scores'][number] | null

export const Score: React.FC<{
  workoutItemId: string
  showInput: boolean
  values?: Score[]
  isCompleted: boolean
}> = ({ workoutItemId, showInput, values = [], isCompleted }) => {
  const { upsertWorkoutItemScore } = useWorkout(workoutItemId)

  const [score, setScore] = useState<string>('')

  const [hasScoreHistory, setHasScoreHistory] = useState(false)
  const [isScoreHistoryVisible, setIsScoreHistoryVisible] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const initialValue = useRef(score)

  useEffect(() => {
    const scores = values.filter((v) => !isToday(new Date(v?.created_at ?? '')))
    setHasScoreHistory(scores.length > 0)
  }, [values])

  const handleUpdate = useCallback(
    async (newValue: string) => {
      if (isSubmitting || newValue === initialValue.current) return

      try {
        setIsSubmitting(true)
        await upsertWorkoutItemScore({
          variables: {
            workoutItemId,
            score: newValue.trim()
          }
        })
        initialValue.current = newValue
      } catch (error) {
        console.error('Error updating score:', error)
        setScore(initialValue.current)
      } finally {
        setIsSubmitting(false)
      }
    },
    [isSubmitting, workoutItemId, upsertWorkoutItemScore]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = e.target.value
      setScore(newValue)
      handleUpdate(newValue)
    },
    [handleUpdate]
  )

  if (!showInput) {
    return null
  }

  const inputClasses = isScoreHistoryVisible ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'
  const isSubmittingClasses = isSubmitting ? 'bg-gray-50 ring-gray-200' : 'bg-white ring-gray-300'
  const placeholderClasses = 'placeholder:text-gray-400'
  const focusClasses = 'focus:ring-2 focus:ring-inset focus:ring-indigo-600'
  const disabledClasses = isCompleted ? 'disabled:cursor-not-allowed disabled:opacity-75' : ''

  const baseClasses = `block w-full border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset`

  const classes = `
    ${baseClasses} 
    ${isSubmittingClasses} 
    ${inputClasses} 
    ${placeholderClasses} 
    ${focusClasses} 
    ${disabledClasses}
  `

  if (isCompleted) {
    const score = values[0]?.value ?? ''

    if (!score) return null

    return (
      <div className="mt-4 w-full isolate inline-flex rounded-md shadow-sm w-full">
        <label htmlFor="score" className="sr-only">Score History</label>
        <input className={classes} disabled value={score} />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-4 mt-4 w-full'>
      <div className="isolate inline-flex rounded-md shadow-sm w-full">
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="score" className="sr-only">
            Score
          </label>
          <input
            ref={inputRef}
            id="score"
            name="score"
            type="text"
            required
            value={score}
            onBlur={handleChange}
            onChange={(e) => setScore(e.target.value)}
            placeholder={PLACEHOLDER}
            className={classes}
            enterKeyHint={KEY_HINT}
          />
        </form>

        {hasScoreHistory && (
          <button
            type="button"
            onClick={() => setIsScoreHistoryVisible(!isScoreHistoryVisible)}
            className={`-ml-px rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10`}
          >
            <ArchiveBoxArrowDownIcon className='w-6 h-6' />
          </button>
        )}
      </div>

      {isScoreHistoryVisible && (
        <div className="w-full">
          <div className="flex flex-col gap-4">
            {values.map((value) => (
              <div key={value?.id} className="flex flex-col gap-2">
                <span className="text-sm text-gray-900">
                  <span className="font-bold mr-1">{value?.created_at}:</span>
                  {value?.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
