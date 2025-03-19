import { useExercises } from '../hooks/useExercises'
import { PlayCircleIcon } from '@heroicons/react/16/solid'
import { useCallback, useMemo, useState } from 'react'
import { Loading } from './Loading'
import { Exercise } from '../hooks/useExercises'

interface SearchInputProps {
  onChange: (value: string) => void
  label?: string
  hotKey?: string
}

const SearchInput = ({
  label = 'Search',
  hotKey = '⌘K',
  onChange
}: SearchInputProps) => (
  <div className="w-full">
    <label htmlFor="query" className="sr-only block text-sm/6 font-medium text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <div className="flex rounded-md bg-white border border-gray-300 focus-within:border-indigo-600">
        <input
          id="search"
          name="search"
          placeholder={label}
          type="text"
          className="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:pl-3 sm:text-sm/6"
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="flex py-1.5 pr-1.5">
          {/* <kbd className="inline-flex items-center rounded-sm border border-gray-200 px-1 font-sans text-xs text-gray-400">
            {hotKey}
          </kbd> */}
        </div>
      </div>
    </div>
  </div>
)

interface LetterFilterProps {
  letters: string[]
  selectedLetter: string
  onSelect: (letter: string) => void
}

const LetterFilter = ({ letters, selectedLetter, onSelect }: LetterFilterProps) => (
  <div className="flex">
    {letters.map((letter) => (
      <button
        key={letter}
        onClick={() => onSelect(letter)}
        className={`px-4 py-4 text-sm font-medium ${selectedLetter === letter
          ? 'border-b-4 border-indigo-500 text-indigo-500'
          : 'border-b-4 border-transparent text-gray-500 hover:text-indigo-700 hover:border-indigo-700'
          } transition`}
      >
        {letter}
      </button>
    ))}
  </div>
)

interface ExerciseCardProps {
  exercise: Exercise
  onPlay: (exercise: Exercise) => void
}

const ExerciseCard = ({ exercise, onPlay }: ExerciseCardProps) => (
  <li key={exercise.demo_video_id} className="relative">
    <div className="mb-2 group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 bg-gray-100">
      <button
        className="block w-full h-full relative"
        onClick={() => onPlay(exercise)}
      >
        <img
          alt=""
          src={`${exercise.base_url}${exercise.demo_video_poster}`}
          className="w-full aspect-[10/7] object-cover transition-transform group-hover:scale-125 group-hover:opacity-80"
        />
        {exercise.demo_video_url && (
          <PlayCircleIcon className="absolute bottom-2 left-2 h-12 w-12 text-gray-200 opacity-80 group-hover:opacity-100 transition" />
        )}
      </button>
    </div>
    <p className="block text-sm font-medium text-gray-900">{exercise.demo_video_title}</p>
  </li>
)

const LETTERS = ['#', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))]

export const Exercises = () => {
  const { exercises, loading, error } = useExercises()
  const [selectedLetter, setSelectedLetter] = useState<string>('#')
  const [search, setSearch] = useState<string | undefined>(undefined)

  const filteredExercises = useMemo(() => {
    if (!search) {
      return exercises[selectedLetter] || []
    }

    const allExercises = Object.values(exercises).flat()
    return allExercises.filter((e: Exercise) =>
      e.demo_video_title.toLowerCase().includes(search.toLowerCase())
    )
  }, [exercises, selectedLetter, search])

  const handleLetterSelect = useCallback((letter: string) => {
    setSelectedLetter(letter)
    setSearch(undefined)
  }, [])

  const openExerciseVideo = useCallback((exercise: Exercise) => {
    if (!exercise.demo_video_url) return

    window.open(
      exercise.demo_video_url,
      'newWindow',
      'noopener,noreferrer,scrollbars=yes,resizable=yes'
    )
  }, [])

  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <div className="sticky top-0 z-10 bg-white flex lg:justify-between overflow-x-auto whitespace-nowrap px-4 lg:gap-x-64">
        <LetterFilter
          letters={LETTERS}
          selectedLetter={selectedLetter}
          onSelect={handleLetterSelect}
        />
        <SearchInput onChange={(value) => setSearch(value)} />
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-x-3 gap-y-6 px-4 lg:px-0 py-4"
      >
        {loading ? (
          <Loading page="exercises" />
        ) : (
          filteredExercises.map((exercise: Exercise) => (
            <ExerciseCard
              key={exercise.demo_video_id}
              exercise={exercise}
              onPlay={openExerciseVideo}
            />
          ))
        )}
      </ul>
    </>
  )
}
