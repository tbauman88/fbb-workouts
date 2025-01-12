import { useState, useMemo } from 'react'
import { marked } from 'marked'
import { ExerciseDetails } from '../types'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ExerciseGroup {
  recommended: ExerciseDetails
  alternative?: ExerciseDetails
  followUps: ExerciseDetails[]
}

interface ExerciseSelectionState {
  [groupId: number]: 'recommended' | 'alternative'
}

const ExerciseTitle: React.FC<{
  exercise: ExerciseDetails
  onClick?: () => void
}> = ({ exercise, onClick }) => (
  <div onClick={onClick} className="cursor-pointer rounded flex-grow">
    <h4
      className="text-base lg:text-lg text-gray-900 font-light cursor-pointer rounded flex-grow"
      dangerouslySetInnerHTML={{
        __html: exercise.title.includes('fa-hand') ? marked(exercise.title) : exercise.title
      }}
    />
    {exercise.subtitle && (
      <em
        className="text-base lg:text-lg text-gray-900 font-light"
        dangerouslySetInnerHTML={{ __html: marked(exercise.subtitle) }}
      />
    )}
  </div>
)

const ExerciseGroup: React.FC<{
  group: ExerciseGroup
  index: number
  selectedExercises: ExerciseSelectionState
  onSelectExercise: (groupIndex: number, type: 'recommended' | 'alternative') => void
}> = ({ group, index, selectedExercises, onSelectExercise }) => {
  const [showAlternative, setShowAlternative] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <ExerciseTitle
          exercise={group.recommended}
          isSelected={selectedExercises[index] === 'recommended'}
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
          isSelected={selectedExercises[index] === 'alternative'}
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
  const navigateToVideo = (url: string | null) => {
    if (!url) return
    window.open(url, 'newWindow', 'noopener,noreferrer,scrollbars=yes,resizable=yes')
  }

  return (
    <section className="flex gap-x-2 overflow-x-scroll snap-x snap-mandatory pt-4">
      {groupedExercises.map((group, index) => {
        // Get the selected exercise for this group
        const selectedType = selectedExercises[index] || 'recommended'
        const selectedExercise = selectedType === 'recommended' ? group.recommended : group.alternative

        // Include follow-ups after the selected exercise
        const visibleExercises = [selectedExercise, ...group.followUps].filter(Boolean)

        return visibleExercises.map((exercise) => {
          if (!exercise?.exercise?.demo_video_poster) return null

          return (
            <div className="min-w-[300px] snap-start relative" key={`video-${exercise.id}`}>
              {exercise.exercise.demo_video_url ? (
                <button
                  onClick={() => navigateToVideo(exercise.exercise.demo_video_url)}
                  className="block w-full h-full relative"
                >
                  <img
                    alt={exercise.exercise.demo_video_title || 'Exercise Thumbnail'}
                    src={`https://delta.trainatom.rpmtraining.com${exercise.exercise.demo_video_thumb}`}
                    className="h-auto object-contain rounded-lg bg-white max-h-[165px]"
                  />
                  <PlayCircleIcon className="absolute bottom-1 left-1 h-8 w-8 text-gray-200 opacity-80 group-hover:opacity-100 transition" />
                </button>
              ) : (
                <img
                  alt={exercise.exercise.demo_video_title || 'Exercise Thumbnail'}
                  src={`https://delta.trainatom.rpmtraining.com${exercise.exercise.demo_video_thumb}`}
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
export const Exercises: React.FC<{ exercise_details: ExerciseDetails[] }> = ({ exercise_details }) => {
  const [selectedExercises, setSelectedExercises] = useState<ExerciseSelectionState>({})

  const groupedExercises = useMemo(() => {
    return exercise_details.reduce<ExerciseGroup[]>((groups, exercise) => {
      const { levels } = exercise

      if (levels.includes('l1')) {
        groups.push({ recommended: exercise, followUps: [] })
      } else if (levels.includes('l3') && !levels.includes('l1')) {
        groups[groups.length - 1].alternative = exercise
      } else if (['l1', 'l2', 'l3', 'l4'].some((level) => levels.includes(level))) {
        groups[groups.length - 1].followUps.push(exercise)
      }

      return groups
    }, [])
  }, [exercise_details])

  const handleSelectExercise = (groupIndex: number, type: 'recommended' | 'alternative') => {
    setSelectedExercises((prev) => ({
      ...prev,
      [groupIndex]: type
    }))
  }

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
