import { useState } from 'react'

export const Score: React.FC<{
  workoutItemId: string
  showInput: boolean
  updateScore: (variables: { variables: { workoutItemId: string; score: string } }) => Promise<void>
  values?: ScoreEntity[]
}> = ({ workoutItemId, showInput, updateScore, values = [] }) => {
  const [value, setScore] = useState(values.map((v) => v.value).join('\n'))

  if (!showInput) {
    return
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateScore({ variables: { workoutItemId, score: value } })
  }

  return (
    <div className="flex shadow-md w-full mt-4">
      <form className="w-full" onSubmit={handleSubmit}>
        <label htmlFor="score" className="sr-only">
          Score
        </label>
        {values.length > 1 ? (
          <textarea
            id="score"
            name="score"
            required
            value={value}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Add score"
            className="block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
        ) : (
          <input
            id="score"
            name="score"
            type="text"
            required
            value={value}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Add score"
            className="block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
        )}
      </form>
    </div>
  )
}
