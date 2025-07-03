import { useState, useRef, useCallback, useEffect } from 'react'
import { useWorkout } from 'hooks/useWorkout'
import { WorkoutItemScoresFragment } from 'generated/graphql'
import { isToday, format } from 'date-fns'
import { ArchiveBoxArrowDownIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline'
import { WorkoutStatus } from 'types'

const PLACEHOLDER = 'e.g., 3x8 @ 135lbs or 30 seconds'
const KEY_HINT = 'done'

export const Score: React.FC<{
  workoutItemId: string
  showInput: boolean
  values?: WorkoutItemScoresFragment[]
  onCompleted?: (completed: boolean) => void
}> = ({ workoutItemId, showInput, values = [], onCompleted }) => {
  const { status, upsertWorkoutItemScore } = useWorkout()

  const [score, setScore] = useState<string>('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [hasScoreHistory, setHasScoreHistory] = useState(false)
  const [isScoreHistoryVisible, setIsScoreHistoryVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [justCompleted, setJustCompleted] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const initialValue = useRef(score)

  useEffect(() => {
    const scores = values.filter((v) => !isToday(new Date(v?.created_at ?? '')))
    const completedStatus = status !== WorkoutStatus.PENDING

    setIsCompleted(completedStatus)
    setHasScoreHistory(scores.length > 0)

    // Find today's score if it exists
    const todaysScore = values.find((v) => isToday(new Date(v?.created_at ?? '')))
    if (todaysScore?.value && !score) {
      setScore(todaysScore.value)
      initialValue.current = todaysScore.value
    }

    onCompleted?.(completedStatus)
  }, [values, status, onCompleted, score])

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

        // Trigger completion animation if score was just added
        if (newValue.trim() && !initialValue.current) {
          setJustCompleted(true)
          setTimeout(() => setJustCompleted(false), 2000)
        }

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
    },
    []
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      handleUpdate(e.target.value)
    },
    [handleUpdate]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleUpdate(e.currentTarget.value)
        e.currentTarget.blur()
      }
    },
    [handleUpdate]
  )

  if (!showInput) {
    return null
  }

  // Completed state styling
  const inputClasses = isScoreHistoryVisible ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'
  const baseClasses = `block w-full border-0 py-4 pl-4 pr-4 text-gray-900 shadow-sm ring-1 ring-inset transition-all duration-200`

  // Dynamic styling based on state
  let stateClasses = ''
  if (isSubmitting) {
    stateClasses = 'bg-blue-50 ring-blue-200 text-blue-900'
  } else if (isCompleted && score) {
    stateClasses = 'bg-green-50 ring-green-300 text-green-900'
  } else {
    stateClasses = 'bg-white ring-gray-300 hover:ring-gray-400 focus:ring-2 focus:ring-indigo-600'
  }

  const placeholderClasses = 'placeholder:text-gray-400'
  const disabledClasses = isCompleted ? 'disabled:cursor-not-allowed disabled:opacity-75' : ''

  const classes = `${baseClasses} ${stateClasses} ${inputClasses} ${placeholderClasses} ${disabledClasses}`

  if (isCompleted) {
    const todaysScore = values.find((v) => isToday(new Date(v?.created_at ?? '')))?.value ?? score

    if (!todaysScore) return null

    return (
      <div className="mt-6 w-full">
        <div className={`isolate inline-flex rounded-md shadow-sm w-full ${justCompleted ? 'animate-pulse' : ''
          }`}>
          <div className="relative w-full">
            <input
              className={classes}
              disabled
              value={todaysScore}
              aria-label="Completed score"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            </div>
          </div>
          {hasScoreHistory && (
            <button
              type="button"
              onClick={() => setIsScoreHistoryVisible(!isScoreHistoryVisible)}
              className="relative -ml-px rounded-r-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-300 ring-inset hover:bg-green-100 focus:z-10 transition-colors duration-200"
              aria-label="View score history"
            >
              <ArchiveBoxArrowDownIcon className='w-5 h-5' />
            </button>
          )}
        </div>

        {/* Score History */}
        {isScoreHistoryVisible && (
          <div className="mt-4 w-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900">Score History</h4>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {values
                .filter((v) => !isToday(new Date(v?.created_at ?? '')))
                .map((value) => (
                  <div key={value?.id} className="px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-medium text-gray-900">{value?.value}</span>
                      <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                        {format(new Date(value?.created_at ?? ''), 'MMM d, yyyy')}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-4 w-full mt-6'>
      {/* Score Input */}
      <div className="isolate inline-flex rounded-md shadow-sm w-full">
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor={`score-${workoutItemId}`} className="sr-only">
            Exercise Score
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              id={`score-${workoutItemId}`}
              name="score"
              type="text"
              value={score}
              onBlur={handleBlur}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={PLACEHOLDER}
              className={classes}
              enterKeyHint={KEY_HINT}
              aria-describedby={`score-${workoutItemId}-description`}
            />

            {/* Loading indicator */}
            {isSubmitting && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <ClockIcon className="h-5 w-5 text-blue-500 animate-spin" />
              </div>
            )}
          </div>
        </form>

        {hasScoreHistory && (
          <button
            type="button"
            onClick={() => setIsScoreHistoryVisible(!isScoreHistoryVisible)}
            className="relative -ml-px rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 transition-colors duration-200"
            aria-label="Toggle score history"
          >
            <ArchiveBoxArrowDownIcon className={`w-5 h-5 transition-transform duration-200 ${isScoreHistoryVisible ? 'rotate-180' : ''
              }`} />
          </button>
        )}
      </div>

      {/* Expanded Score History */}
      {isScoreHistoryVisible && (
        <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden animate-fadeIn">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900">Previous Scores</h4>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {values.length > 0 ? (
              values.map((value) => (
                <div key={value?.id} className="px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-gray-900">{value?.value}</span>
                    <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                      {format(new Date(value?.created_at ?? ''), 'MMM d, yyyy')}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-sm text-gray-500">
                No previous scores recorded
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
