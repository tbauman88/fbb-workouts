import React from "react";
import { marked } from "marked";
import { WorkoutCardProps } from "../types/component";

export const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  const description = workout.description || workout.notes;
  const truncatedDescription = description && description.slice(0, 375);

  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          alt=""
          src={workout.poster}
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>

      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={workout.subtitle} className="text-gray-500">
            {workout.id} - {workout.subtitle}
          </time>
          <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
            {workout.program_name}
          </span>
        </div>

        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            {workout.title}
          </h3>
          {description && (
            <p
              className="mt-5 text-sm/6 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: marked(
                  `${truncatedDescription}${
                    description.length > 150 ? "..." : ""
                  }`
                )
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
};
