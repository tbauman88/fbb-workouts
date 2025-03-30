import { useState, useMemo } from 'react'
import { marked } from 'marked'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ExerciseDetailsFragment } from '../generated/graphql'

interface ExerciseGroup {
  recommended: ExerciseDetailsFragment
  alternative?: ExerciseDetailsFragment
  followUps: ExerciseDetailsFragment[]
}

interface ExerciseSelectionState {
  [groupId: number]: 'recommended' | 'alternative'
}

const ExerciseTitle: React.FC<{
  exercise: ExerciseDetailsFragment
  onClick?: () => void
}> = ({ exercise, onClick }) => {
  if (!exercise.title) return null

  return (
    <div onClick={onClick} className="cursor-pointer rounded flex-grow">
      <h4
        className="text-base lg:text-lg text-gray-900 font-light cursor-pointer rounded flex-grow mb-2"
        dangerouslySetInnerHTML={{
          __html: exercise.title.includes('fa-hand') ? marked(exercise.title) : exercise.title
        }} />
      {exercise.subtitle && (
        <em
          className="text-base lg:text-lg text-gray-900 font-light"
          dangerouslySetInnerHTML={{
            __html: exercise.title.includes('fa-hand') ? marked(exercise.subtitle) : exercise.subtitle
          }} />
      )}
    </div>
  )
}

const ExerciseGroup: React.FC<{
  group: ExerciseGroup
  index: number
  selectedExercises: ExerciseSelectionState
  onSelectExercise: (groupIndex: number, type: 'recommended' | 'alternative') => void
}> = ({ group, index, onSelectExercise }) => {
  const [showAlternative, setShowAlternative] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <ExerciseTitle
          exercise={group.recommended}
          onClick={() => onSelectExercise(index, 'recommended')}
        />
        {group.alternative && (
          <button
            onClick={() => setShowAlternative(!showAlternative)}
            className="text-gray-500 p-2"
            aria-label="Toggle alternative exercise"
          >
            {showAlternative ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
          </button>
        )}
      </div>

      {showAlternative && group.alternative && (
        <ExerciseTitle
          exercise={group.alternative}
          onClick={() => onSelectExercise(index, 'alternative')}
        />
      )}

      {group.followUps.map((followUp) => (
        <ExerciseTitle key={followUp.id} exercise={followUp} />
      ))}
    </>
  )
}

const VideoSection: React.FC<{
  groupedExercises: ExerciseGroup[]
  selectedExercises: ExerciseSelectionState
}> = ({ groupedExercises, selectedExercises }) => {
  const navigateToVideo = (url: string | null | undefined) => {
    if (!url) return
    window.open(url, 'newWindow', 'noopener,noreferrer,scrollbars=yes,resizable=yes')
  }

  return (
    <section className="flex gap-x-2 overflow-x-scroll snap-x snap-mandatory py-4">
      {groupedExercises.map((group, index) => {
        // Get the selected exercise for this group
        const selectedType = selectedExercises[index] || 'recommended'
        const selectedExercise = selectedType === 'recommended' ? group.recommended : group.alternative

        // Include follow-ups after the selected exercise
        const visibleExercises = [selectedExercise, ...group.followUps].filter(Boolean) as ExerciseDetailsFragment[]

        return visibleExercises.map(({ exercise }) => {
          if (!exercise?.demo_video_poster) return null

          const videoUrl = `${exercise.base_url}${exercise.demo_video_poster}`

          return (
            <div className="min-w-[300px] snap-start relative" key={`video-${exercise.id}`}>
              {exercise.demo_video_url ? (
                <button
                  onClick={() => navigateToVideo(exercise.demo_video_url)}
                  className="block w-full h-full relative"
                >
                  <img
                    alt={exercise.demo_video_title || 'Exercise Thumbnail'}
                    src={videoUrl}
                    className="h-auto object-contain rounded-lg bg-white max-h-[165px]"
                  />
                  <PlayCircleIcon className="absolute bottom-1 left-1 h-8 w-8 text-gray-200 opacity-80 group-hover:opacity-100 transition" />
                </button>
              ) : (
                <img
                  alt={exercise.demo_video_title || 'Exercise Thumbnail'}
                  src={videoUrl}
                  className="h-auto object-contain rounded-lg bg-white max-h-[165px]"
                />
              )}
            </div>
          )
        })
      })}
    </section>
  )
}

export const Exercises: React.FC<{ details: ExerciseDetailsFragment[] }> = ({ details }) => {
  const [selectedExercises, setSelectedExercises] = useState<ExerciseSelectionState>({})

  const groupedExercises = useMemo(() => {
    if (!details) return []

    return details.reduce<ExerciseGroup[]>((groups, exercise) => {
      const { levels } = exercise

      if (levels.includes('l1')) {
        groups.push({ recommended: exercise, followUps: [] })
      } else if (levels.includes('l3') && !levels.includes('l1')) {
        if (groups.length > 0) {
          groups[groups.length - 1].alternative = exercise
        }
      } else if (['l1', 'l2', 'l3', 'l4'].some((level) => levels.includes(level))) {
        if (groups.length > 0) {
          groups[groups.length - 1].followUps.push(exercise)
        }
      }

      return groups
    }, [])
  }, [details])

  const handleSelectExercise = (groupIndex: number, type: 'recommended' | 'alternative') => {
    setSelectedExercises((prev) => ({
      ...prev,
      [groupIndex]: type
    }))
  }

  if (details.length === 0) return

  return (
    <>
      <section className="w-full">
        {groupedExercises.map((group, index) => (
          <ExerciseGroup
            key={group.recommended.id}
            group={group}
            index={index}
            selectedExercises={selectedExercises}
            onSelectExercise={handleSelectExercise}
          />
        ))}
      </section>
      <VideoSection groupedExercises={groupedExercises} selectedExercises={selectedExercises} />
    </>
  )
}
