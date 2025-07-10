import { useExercises } from '../hooks/useExercises'
import { PlayCircleIcon } from '@heroicons/react/16/solid'
import { useCallback, useMemo, useState } from 'react'
import { Loading } from './Loading'
import { Exercise } from '../hooks/useExercises'
import { useMedia } from 'react-use'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { SearchInput } from '../components'
import { buildAndProxyImageUrl } from '../utils/imageProxy'

interface LetterFilterProps {
  letters: string[]
  selectedLetter: string
  onSelect: (letter: string) => void
  isDesktop: boolean
}

const LetterFilter = ({ letters, selectedLetter, onSelect, isDesktop }: LetterFilterProps) => {
  const desktopStyles = {
    button: 'px-4 py-4 text-sm font-medium',
    selected: 'border-b-4 border-primary-500 text-primary-500',
    unselected: 'border-b-4 border-transparent text-gray-500 hover:text-primary-700 hover:border-primary-700',
    transition: 'transition'
  }

  const mobileStyles = {
    listButton: 'grid w-full cursor-pointer grid-cols-1 rounded bg-white py-1 pr-2 pl-3 text-left text-sm',
    listOptions: 'absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md bg-white py-2 text-sm shadow-md',
    listOption: 'group relative cursor-pointer py-2 px-3',
    listOptionSelected: 'font-semibold text-primary-900',
    listOptionUnselected: 'font-normal text-gray-500',
    listOptionTransition: 'transition',
    listButtonIcon: 'col-start-1 row-start-1 h-4 w-4 self-center justify-self-end text-gray-500',
    listButtonText: 'col-start-1 row-start-1 truncate pr-6',
  }

  return (
    <>
      {isDesktop ? (
        <div className="flex">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => onSelect(letter)}
              className={`${desktopStyles.button} ${selectedLetter === letter
                ? desktopStyles.selected
                : desktopStyles.unselected
                } ${desktopStyles.transition}`}
            >
              {letter}
            </button>
          ))}
        </div>
      ) : (
        <div className="w-full">
          <Listbox value={selectedLetter} onChange={(value) => onSelect(value)}>
            <div className="relative mt-2">
              <ListboxButton className={`${mobileStyles.listButton}`}>
                <span className={`${mobileStyles.listButtonText}`}>{selectedLetter}</span>
                <ChevronUpDownIcon
                  aria-hidden="true"
                  className={`${mobileStyles.listButtonIcon}`}
                />
              </ListboxButton>

              <ListboxOptions
                transition
                className={`${mobileStyles.listOptions}`}
              >
                {letters.map((letter) => (
                  <ListboxOption
                    key={letter}
                    value={letter}
                    className={`${mobileStyles.listOption} ${selectedLetter === letter ? mobileStyles.listOptionSelected : mobileStyles.listOptionUnselected}`}
                  >
                    {letter}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      )}
    </>
  )
}

interface ExerciseCardProps {
  exercise: Exercise
  onPlay: (exercise: Exercise) => void
}

const ExerciseCard = ({ exercise, onPlay }: ExerciseCardProps) => (
  <li key={exercise.demo_video_id} className="relative">
    <div className="mb-2 group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 bg-gray-100">
      <button className="block w-full h-full relative" onClick={() => onPlay(exercise)}>

        <img
          alt=""
          src={buildAndProxyImageUrl(exercise.base_url, exercise.demo_video_poster)}
          className="w-full aspect-[10/7] object-cover transition-transform group-hover:scale-125 group-hover:opacity-80"
        />

        <div className="absolute top-2 right-2 uppercase">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
            {exercise.muscle_group?.type}
          </span>
        </div>
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
  const isDesktop = useMedia('(min-width: 768px)', true);

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

  const handleLetterSelect = (letter: string) => {
    setSelectedLetter(letter)
    setSearch(undefined)
  }

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
      <div className={`sticky top-0 z-10 bg-white flex lg:justify-between ${isDesktop ? 'overflow-x-auto hide-scrollbar' : 'overflow-x-visible'} whitespace-nowrap px-4 gap-x-8 lg:gap-x-16`}>
        <LetterFilter
          letters={LETTERS}
          selectedLetter={selectedLetter}
          onSelect={handleLetterSelect}
          isDesktop={isDesktop}
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
