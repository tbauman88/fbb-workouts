import React, { FC, useState } from "react";
import { marked } from "marked";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import { Exercise } from "../types";

export const Exercises: FC<{ exercise_details: Exercise[] }> = ({
  exercise_details
}) => {
  const [exercises, setExercises] = useState(() =>
    exercise_details.map((exercise: Exercise) => {
      const isMain = exercise?.levels?.includes("l1");
      const isLast = exercise?.levels?.includes("l4");
      return { ...exercise };
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
        {exercises
          .filter((exercise) => !exercise.hidden)
          .map(({ subtitle, title, scaleOptions }, index) => {
            return (
              <div
                className="flex items-center justify-between"
                key={`${title}-${index}`}
              >
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
        {exercises
          .filter((exercise) => !exercise.hidden)
          .map(({ exercise }, index) => {
            if (!exercise?.demo_video_poster) return;

            return (
              <div
                className="min-w-[300px] snap-start relative"
                key={`video-${exercise?.demo_video_url}-${index}`}
              >
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
