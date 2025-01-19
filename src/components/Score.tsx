import { useState } from 'react'

export const Score: React.FC<{ values?: ScoreEntity[]; showInput: boolean }> = ({ values = [], showInput }) => {
  const [value, setScore] = useState(values[0]?.value)

  if (!showInput) {
    return
  }

  return (
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
          value={value}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Add score"
          className="block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </form>
    </div>
  )
}
