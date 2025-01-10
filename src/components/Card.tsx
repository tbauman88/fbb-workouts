import React, { ReactNode, MouseEventHandler } from "react";
import { Program, Workout } from "../types";
import { marked } from "marked";

export const Card: React.FC<{
  children?: ReactNode;
  handleClick?: MouseEventHandler<HTMLLIElement | HTMLHeadingElement>;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  includeFooter?: boolean;
  workout?: Workout;
  program?: Program;
}> = ({
  children,
  handleClick,
  image,
  title,
  description,
  workout,
  program
}) => {
  if (program) {
    return (
      <li className="overflow-hidden rounded-lg bg-white shadow">
        <section
          onClick={handleClick}
          className="group cursor-pointer block w-full aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
          <img
            alt=""
            src={image}
            className="pointer-events-none w-full h-full object-cover group-hover:opacity-75"
          />
        </section>

        <div className="px-4 py-4 sm:px-6">
          <h3
            onClick={handleClick}
            className="group cursor-pointer text-base font-semibold leading-6 text-gray-900 uppercase"
          >
            {title}
          </h3>

          <p className="my-2 text-sm text-gray-500">{description}</p>

          {children}
        </div>
      </li>
    );
  }

  if (workout) {
    const description = workout.description || workout.notes;

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
            <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {workout.program_name}
            </a>
          </div>
          <div className="group relative max-w-xl">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0" />
              {workout.title}
            </h3>
            {description && (
              <p
                className="mt-5 text-sm/6 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: marked(
                    `${description.slice(0, 375)}${
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
  }
};
