import { useState } from 'react'

export const Score: React.FC<{ values?: ScoreEntity[] }> = ({ values = [] }) => {
  const [newValue, setScore] = useState(values[0]?.value)

  if (values.length === 0) {
    return
  }

  return (
    newValue && (
      <div className="flex shadow-md w-full mt-4">
        <form className="w-full">
          <label htmlFor="score" className="sr-only">
            Score
          </label>
          <input
            id="score"
            name="score"
            type="score"
            required
            value={newValue}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Fill out score"
            className="block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
        </form>
      </div>
    )
  )
}
