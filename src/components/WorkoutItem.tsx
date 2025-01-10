import React, { FC } from "react";
import { marked } from "marked";
import { Exercises } from "./Exercises";
import { Score } from "./Score";

interface WorkoutItemProps {
  item: {
    header?: string;
    title?: string;
    exercise_details: ExerciseDetails[];
    notes?: string;
    score?: string;
    id: string | number;
  };
}

export const WorkoutItem: FC<WorkoutItemProps> = ({
  item: { header, title, exercise_details, notes, score }
}) => (
  <article className="py-6 flex flex-wrap gap-x-3 w-full">
    {header && (
      <h2 className="w-full text-xl text-gray-900 font-bold tracking-tight">
        {header}
      </h2>
    )}
    {title && (
      <h4
        className="mb-4 w-full flex-none text-lg text-gray-900 font-light"
        dangerouslySetInnerHTML={{ __html: marked(title) }}
      />
    )}
    <Exercises exercise_details={exercise_details} />
    {notes && (
      <section
        className="prose mt-4 text-base text-gray-600 font-light"
        dangerouslySetInnerHTML={{ __html: marked(notes) }}
      />
    )}
    {score && <Score value={score} />}
  </article>
);
