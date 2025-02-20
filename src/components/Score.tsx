import { useState, useRef, useCallback } from 'react'
import { useWorkout } from '../hooks/useWorkout'

export const Score: React.FC<{
  workoutItemId: string
  showInput: boolean
  values?: { value: string }[]
}> = ({ workoutItemId, showInput, values = [] }) => {
  const { upsertWorkoutItemScore } = useWorkout(workoutItemId)

  const [value, setScore] = useState(values.map((v) => v.value).join('\n'))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const initialValue = useRef(value)

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

  const classes = `block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset 
  ${isSubmitting ? 'bg-gray-50' : 'bg-white'}
  ${isSubmitting ? 'ring-gray-200' : 'ring-gray-300'}
  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
  sm:text-sm/6 disabled:cursor-not-allowed disabled:opacity-50`

  return (
    <div className="flex shadow-md w-full mt-4">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="score" className="sr-only">
          Score
        </label>
        {values.length > 1 ? (
          <textarea
            ref={textareaRef}
            id="score"
            name="score"
            required
            value={value}
            onBlur={handleChange}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Add score"
            className={classes}
            enterKeyHint="done"
            rows={values.length}
          />
        ) : (
          <input
            ref={inputRef}
            id="score"
            name="score"
            type="text"
            required
            value={value}
            onBlur={handleChange}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Add score"
            className={classes}
            enterKeyHint="done"
          />
        )}
      </form>
    </div>
  )
}
