import React, { FC, useState } from "react";
import { marked } from "marked";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  PlayCircleIcon
} from "@heroicons/react/16/solid";

interface Exercise {
  levels: string[];
  hidden: boolean;
  scaleOptions: boolean;
  subtitle?: string;
  title: string;
  exercise?: {
    demo_video_poster?: string;
    demo_video_url?: string;
    demo_video_thumb?: string;
    demo_video_title?: string;
  };
}

export const Exercises: FC<{ exercise_details: unknown[] }> = ({
  exercise_details
}) => {
  const [exercises, setExercises] = useState(() =>
    exercise_details.map((exercise: any) => {
      const isMain = exercise?.levels?.includes("l1") ?? false;
      const isLast = exercise?.levels?.includes("l4") ?? false;
      return { ...exercise, hidden: !isMain, scaleOptions: isMain && !isLast };
    })
  );

  if (exercise_details.length < 1) return null;

  const toggleVisibility = (groupStartIndex: number) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise, index) =>
        index > groupStartIndex && !exercise.levels.includes("l1")
          ? { ...exercise, hidden: !exercise.hidden }
          : exercise
      )
    );
  };

  const navigateToVideo = (url: string | null) => {
    if (!url) return;
    window.open(
      url,
      "newWindow",
      "'noopener,noreferrer,scrollbars=yes,resizable=yes'\n"
    );
  };

  return (
    <>
      <section className="w-full">
        {exercises.map(({ subtitle, title, hidden, scaleOptions }, index) => {
          if (hidden) return;

          return (
            <div className="flex items-center justify-between" key={title}>
              <div>
                <h4
                  className="text-base lg:text-lg text-gray-900 font-light"
                  dangerouslySetInnerHTML={{
                    __html: title.includes("fa-hand") ? marked(title) : title
                  }}
                />
                {subtitle && (
                  <em
                    className="text-base lg:text-lg text-gray-900 font-light"
                    dangerouslySetInnerHTML={{ __html: marked(subtitle) }}
                  />
                )}
              </div>

              {scaleOptions && (
                <button
                  onClick={() => toggleVisibility(index)}
                  className="text-gray-500 mr-2"
                  aria-label="Toggle linked exercise visibility"
                >
                  {exercises[index + 1]?.hidden ? (
                    <ChevronRightIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          );
        })}
      </section>

      <section className="flex gap-x-2 overflow-x-scroll snap-x snap-mandatory pt-4">
        {exercises.map(({ exercise, hidden }) => {
          if (hidden || !exercise?.demo_video_poster) return;

          return (
            <div className="min-w-[300px] snap-start relative">
              {exercise.demo_video_url ? (
                <button
                  onClick={() => navigateToVideo(exercise.demo_video_url)}
                  className="block w-full h-full relative"
                >
                  <img
                    alt={exercise.demo_video_title || "Exercise Thumbnail"}
                    src={`https://delta.trainatom.rpmtraining.com${exercise.demo_video_thumb}`}
                    className="h-auto object-contain rounded-lg bg-white max-h-[165px]"
                  />
                  <PlayCircleIcon className="absolute bottom-1 left-1 h-8 w-8 text-gray-200 opacity-80 group-hover:opacity-100 transition" />
                </button>
              ) : (
                <img
                  alt={exercise.demo_video_title || "Exercise Thumbnail"}
                  src={`https://delta.trainatom.rpmtraining.com${exercise.demo_video_thumb}`}
                  className="h-auto object-contain rounded-lg bg-white max-h-[165px]"
                />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};
