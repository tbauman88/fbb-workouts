import { useExercises } from '../hooks/useExercises'
import { PlayCircleIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { Loading } from './Loading'
export const Exercises = () => {
  const { groupedExercises, loading, error } = useExercises()
  const [selectedLetter, setSelectedLetter] = useState<string>('#')

  const letters = ['#', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))]

  if (error) return <div>Error: {error.message}</div>

  const openExerciseVideo = (url: string | null) => {
    if (!url) return
    window.open(url, 'newWindow', 'noopener,noreferrer,scrollbars=yes,resizable=yes')
  }

  return (
    <>
      <div className="sticky top-0 z-10 bg-white flex lg:justify-center overflow-x-auto whitespace-nowrap px-4">
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`px-4 py-4 text-sm font-medium ${
              selectedLetter === letter
                ? 'border-b-4 border-indigo-500 text-indigo-500'
                : 'border-b-4 border-transparent text-gray-500 hover:text-indigo-700 hover:border-indigo-700'
            } transition`}
          >
            {letter}
          </button>
        ))}
      </div>

      {loading && <Loading page="exercises" />}

      {!loading && (
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-x-3 gap-y-6 px-4 lg:px-0 py-4"
        >
          {groupedExercises[selectedLetter]?.map((e: Exercise) => (
            <li key={e.demo_video_id} className="relative">
              <div className="mb-2 group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 bg-gray-100">
                <button className="block w-full h-full relative" onClick={() => openExerciseVideo(e.demo_video_url)}>
                  <img
                    alt=""
                    src={`https://delta.trainatom.rpmtraining.com${e.demo_video_poster}`}
                    className="w-full aspect-[10/7] object-cover transition-transform group-hover:scale-125 group-hover:opacity-80"
                  />
                  {e.demo_video_url && (
                    <PlayCircleIcon className="absolute bottom-2 left-2 h-12 w-12 text-gray-200 opacity-80 group-hover:opacity-100 transition" />
                  )}
                </button>
              </div>
              <p className="block text-sm font-medium text-gray-900">{e.demo_video_title}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
